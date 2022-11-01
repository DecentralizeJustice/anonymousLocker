const nowKey = process.env.nowPaymentsAPIKey
const axios = require("axios")

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
  if (Number(apiRequest.pay_amount) <= Number(apiRequest.actually_paid)) {
    console.log('Payment Done')
  }
  return {
    statusCode: 200,
    body: JSON.stringify(apiRequest),
  }
}
async function get(paymentID) {
  const response = await axios.get(`https://api.nowpayments.io/v1/payment/${paymentID}`, {
    headers: {
        'x-api-key': nowKey
    }
})
  return response.data
}
