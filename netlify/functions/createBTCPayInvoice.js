const BTCpayKey = process.env.BTCpayKey
const BTCpayStore = process.env.BTCpayStore
const axios = require("axios")
const Joi = require("joi")
exports.handler = async (event, context) => {
  const params = event.body
  const parsed = JSON.parse(params)

  const amount = parsed.amount
  const amountSchema = Joi.number().required().min(0).max(99999)
  await amountSchema.validateAsync(amount)

  const metadata = parsed.metadata
  const storeAddress = 'https://btcpay.anonshop.app/api/v1/stores/' + BTCpayStore + '/invoices'
  const response = await axios.post(
        storeAddress,
        {
            'amount': amount,
            'speedPolicy': 'HighSpeed', // "LowSpeed"
            'checkout': {
                'paymentMethods': [
                    'XMR'
                ],
                'redirectURL': 'https://anonshop.app/checkOnOrder',
                'redirectAutomatically': true
            },
            'metadata': Buffer.from(JSON.stringify(metadata)).toString('base64')
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': BTCpayKey
            }
        }
    ) 
  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}
