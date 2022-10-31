const nowKey = process.env.nowPaymentsAPIKey
const axios = require("axios")

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  await get()
  return {
    statusCode: 200,
    body: "ran",
  }
}
async function get() {
  const response = await axios.post(
    "https://api.nowpayments.io/v1/payment",
    // '{\n  "price_amount": 3999.5,\n  "price_currency": "usd",\n  "pay_currency": "btc",\n  "ipn_callback_url": "https://nowpayments.io",\n  "order_id": "RGDBP-21314",\n  "order_description": "Apple Macbook Pro 2019 x 1"\n}',
    {
      price_amount: 3999.5,
      price_currency: "usd",
      pay_currency: "xmr",
      ipn_callback_url: "https://nowpayments.io",
      order_id: "RGDBP-213145",
      order_description: "YmJtUFh2VHhTaFYzUkFucUVnU2liY3JWdURuWUtjSWdXQ3lvZGd1bXhuUS9MTnphR1JHNUIzWFNEdldwalBvZis3d05uTmZBRHNNYw",
    },
    {
      headers: {
        "x-api-key": nowKey,
        "Content-Type": "application/json",
      },
    }
  )
  console.log(response.data)
}
