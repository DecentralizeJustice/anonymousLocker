const nowKey = process.env.nowPaymentsAPIKey
const _sodium = require("libsodium-wrappers")
const axios = require("axios")
const Redis = require('ioredis')
const redisPassword = process.env.redisPassword
const fs = require('fs')
const path = require("path")
const pathWordlist = path.resolve(__dirname + "/bip39Wordlist.txt")
const words = fs.readFileSync(pathWordlist, 'utf8').toString().split("\n")
exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not  Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
/*   console.log(parsed)
  console.log(parsed.paymentID) */
  if (parsed.paymentID.length > 150) {
    return { statusCode: 400, body: "paymentID too long" }
  }
  const apiRequest = await get(parsed.paymentID)
  if (Number(apiRequest.pay_amount) <= Number(apiRequest.actually_paid)) {
    console.log('ran')
    await setupBucket(parsed.orderInfo.paymentInfo)
  }
  // await setupBucket(parsed.orderInfo.paymentInfo)
  // await setupBucket(parsed.orderInfo)
/*   const publicKeyBase64 = process.env.initialPublicKeyBase64 
  const privateKeyBase64 = process.env.initialPrivateKeyBase64
  const fixMistake = await decrypt(publicKeyBase64, privateKeyBase64, '3t3_C_hmtOg1jKQGhiyjZ6QrZ8LcLeWJdYY0qxXmW2S-6kPIE8cflXWfvWC8Cp69D_YU-ci2lBGUoSPBHWOmsT4R8U1xE0D69q4MKg')
  console.log(fixMistake) */
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
  const publicKeyBase64 = process.env.initialPublicKeyBase64 
  const privateKeyBase64 = process.env.initialPrivateKeyBase64
  const numberArray = await decrypt(publicKeyBase64, privateKeyBase64, orderInfo.nowPaymentsInfo.order_id)
  const firstMessageOrderInfo = processFirstMessage(orderInfo, numberArray)
  const firstMessage = { from: 'dgoon', message: firstMessageOrderInfo, sent: Date.now()}
  const redis = new Redis({
    host: 'redis-12641.c278.us-east-1-4.ec2.cloud.redislabs.com',
    port: 12641,
    password: redisPassword
  })
  const json = await redis.call("JSON.SET", numberArray, "$", JSON.stringify({ messageArray: [firstMessage]}))
  redis.disconnect()
  return json
}
function processFirstMessage(orderDetails, numberArray) {
  const nowPaymentsInfo = orderDetails.nowPaymentsInfo
  let firstString = ''
  const welcomeMessage = 'Hi, Thank you for being a earner at Anon Shop 😎<br/><br/> Your earner notes are:<br/>'
  firstString = firstString.concat(welcomeMessage)
  firstString = firstString.concat(`${orderDetails.extraNotes}` + `<br/><br/>`)
  firstString = firstString.concat(`XMR Paid:  ` + nowPaymentsInfo.pay_amount + `<br/><br/>`)
  firstString = firstString.concat(`Hi Friend. We have some orders ready to go! You can check out the order list here: https://anonshop.app/earn . The website shows more info on desktop. Just let me know which order you want to take and I will get you started. It's a first come, first serve type of deal 🏃` + `<br/><br/>`)
  
  const orderLink = `You can use this link to access your earner chat with us: ` + getCheckOrderLink(numberArray)
  firstString = firstString.concat(orderLink)
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
function getCheckOrderLink(numberArray){
  const wordListFinal = numberArrayToWordArray(numberArray)
  const link = 'https://anonshop.app/checkonorder#' + wordListFinal.join(',')
  return link
}
function numberArrayToWordArray (numberArray) {
  const wordArray = []
  const splitNumberArray = numberArray.split(",")
  const length = splitNumberArray.length
  for (var i=0;i<length; i++) {
    const wordToAdd = words[splitNumberArray[i]]
    wordArray.push(wordToAdd.replace(/(\r\n|\n|\r)/gm, ""))
  }
  return wordArray
}