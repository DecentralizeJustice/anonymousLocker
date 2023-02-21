const BTCpayKey = process.env.BTCpayKey
const BTCpayStore = process.env.BTCpayStore
const axios = require("axios")

exports.handler = async (event, context) => {
  const params = event.body
  const parsed = JSON.parse(params)
  const amount = parsed.amount
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
            'metadata': metadata
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
