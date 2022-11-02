const nowKey = process.env.nowPaymentsAPIKey
const _sodium = require("libsodium-wrappers")
const axios = require("axios")
const pantry = require('pantry-node')
const pantryID = process.env.pantryID
const pantryClient = new pantry(pantryID) // eslint-disable-line new-cap
exports.handler = async (event, context) => {
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
  await setupBucket(parsed.orderInfo)
  if (Number(apiRequest.pay_amount) <= Number(apiRequest.actually_paid)) {
    console.log('Payment Done')
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
  const results = await pantryClient.basket.create(numberArray, { messageArray: [firstMessage]})
  console.log(results)
  return results
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
    const notesString = 'Item Notes: ' +`${itemList[index].description}`
    firstString = firstString.concat(linkTitle + quantityString + itemCostString + notesString+ '<br/>')
  }
  const nowPaymentsInfo = orderDetails.nowPaymentsInfo
  firstString = firstString.concat('Order USD Total: ', nowPaymentsInfo.price_amount,  '<br/>')
  firstString = firstString.concat('Order XMR Total: ', nowPaymentsInfo.pay_amount, '<br/><br/>')
  const outro = `I will follow place your order soon and message you the order details. If you need anything or have any questions, just shoot me a message here.`
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