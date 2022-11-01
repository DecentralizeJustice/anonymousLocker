const nowKey = process.env.nowPaymentsAPIKey
const axios = require("axios")

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  if (parsed.encryptedPassphrase.length > 150) {
    return { statusCode: 400, body: "orderID too long" }
  }
  if (parsed.finalTotalUSD.length > 100) {
    return { statusCode: 400, body: "finalTotalUSD is too long" }
  }
  const apiRequest = await get(parsed.encryptedPassphrase, parsed.finalTotalUSD)
  return {
    statusCode: 200,
    body: JSON.stringify(apiRequest),
  }
}
async function get(encryptedPassphrase, finalTotalUSD) {
  const response = await axios.post(
    "https://api.nowpayments.io/v1/payment",
    // '{\n  "price_amount": 3999.5,\n  "price_currency": "usd",\n  "pay_currency": "btc",\n  "ipn_callback_url": "https://nowpayments.io",\n  "order_id": "RGDBP-21314",\n  "order_description": "Apple Macbook Pro 2019 x 1"\n}',
    {
      price_amount: finalTotalUSD,
      price_currency: "usd",
      pay_currency: "xmr",
      ipn_callback_url: "https://nowpayments.io",
      order_id: encryptedPassphrase,
      order_description: "Test Payments",
    },
    {
      headers: {
        "x-api-key": nowKey,
        "Content-Type": "application/json",
      },
    }
  )
  return response.data
}
