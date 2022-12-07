const nowKey = process.env.nowPaymentsAPIKey
const _sodium = require("libsodium-wrappers")
const axios = require("axios")
const Redis = require('ioredis')
const redisPassword = process.env.redisPassword
exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  if (parsed.paymentID.length > 150) {
    return { statusCode: 400, body: "paymentID too long" }
  }
  const apiRequest = await get(parsed.paymentID)
  if (Number(apiRequest.pay_amount) <= Number(apiRequest.actually_paid)) {
    console.log('ran')
    await setupBucket(parsed.orderInfo)
  }
  return {
    statusCode: 200,
    body: JSON.stringify(apiRequest),
  }
}
async function get(paymentIDinput) {
  const response = await axios.get(`https://api.nowpayments.io/v1/payment/${paymentIDinput}`, {
    headers: {
        'x-api-key': nowKey
    }
})
  return response.data
}
async function setupBucket(orderInfo){
  const firstMessageOrderInfo = processFirstMessage(orderInfo)
  const firstMessage = { from: 'dgoon', message: firstMessageOrderInfo, sent: Date.now()}
  const publicKeyBase64 = process.env.initialPublicKeyBase64 
  const privateKeyBase64 = process.env.initialPrivateKeyBase64
  const numberArray = await decrypt(publicKeyBase64, privateKeyBase64, orderInfo.nowPaymentsInfo.order_id)
  const redis = new Redis({
    host: 'redis-12641.c278.us-east-1-4.ec2.cloud.redislabs.com',
    port: 12641,
    password: redisPassword
  })
  const json = await redis.call("JSON.SET", numberArray, "$", JSON.stringify({ messageArray: [firstMessage]}))
  redis.disconnect()
  return json
}
function processFirstMessage(orderDetails) {
  let firstString = ''
  const welcomeMessage = 'Hi, <br/> Thank you for using Anonymous Locker!<br/> Your order Summary is:<br/><br/>'
  firstString = firstString.concat(welcomeMessage)
  const itemList = orderDetails.itemList
  for (let index = 0; index < itemList.length; index++) {
    const linkTitle = 'Item Name: '+ itemList[index].link.split("/")[3].replace(/-/g, " ") + '<br/>'
    const quantityString = 'Quantity: ' +`${itemList[index].quantity}` + '<br/>'
    const itemCostString = 'Single Item Cost: ' +`${itemList[index].cost}` + '<br/>'
    const notesString = 'Item Notes: ' +`${itemList[index].description}` + '<br/>'
    const linkString = `<a href="${itemList[index].link}" target="_blank" rel="noopener noreferrer">Item Link</a>`+ '<br/>'
    firstString = firstString.concat(linkTitle + quantityString + itemCostString + notesString+ linkString+  '<br/>')
  }
  const nowPaymentsInfo = orderDetails.nowPaymentsInfo
  firstString = firstString.concat('Order USD Total: ', nowPaymentsInfo.price_amount,  '<br/>')
  firstString = firstString.concat(`Order ${orderDetails.paymentCoin.toUpperCase()} Total: `, nowPaymentsInfo.pay_amount, '<br/><br/>')
  firstString = firstString.concat('Amazon Locker Name: ', orderDetails.lockerName, '<br/>')
  firstString = firstString.concat('Amazon Locker Zipcode: ', orderDetails.lockerZipcode, '<br/>')
  firstString = firstString.concat('Extra Order Notes: ', orderDetails.extraNotes, '<br/><br/>')
  const outro = `I will place your order within 12 hours. I'll message you here with your order details. If you need anything or have any questions, just shoot me a message here.`
  firstString = firstString.concat(outro)
  return firstString
}
async function decrypt(public64, private64, orderID){
  await _sodium.ready
  const sodium = _sodium
  const ciphertext = sodium.from_base64(orderID)
  const soduimMessage = sodium.crypto_box_seal_open(ciphertext, sodium.from_base64(public64), sodium.from_base64(private64))
  const sodiumString = sodium.to_string(soduimMessage)
  return sodiumString
}