/* const BTCpayKey = process.env.BTCpayKey
const BTCpayStore = process.env.BTCpayStore
const axios = require("axios") */
const webhookKey = process.env.BTCWebhookKey
exports.handler = async (event, context) => {
    console.log(event.body)
  return {
    statusCode: 200,
    body: ''
  }
}
