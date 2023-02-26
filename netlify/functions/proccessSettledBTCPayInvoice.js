/* const BTCpayKey = process.env.BTCpayKey
const BTCpayStore = process.env.BTCpayStore
const axios = require("axios") */
const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const webhookKey = process.env.BTCWebhookKey
exports.handler = async (event) => {

    try {
      console.log(event.body)
      const collection = client.db("accounts").collection("accountInfo")
      const params = event.body
      const parsed = JSON.parse(params)
      const numberArray = parsed.metadata.numberArray.toString()
      const query = { passphrase: numberArray }
      const exist = await collection.findOne(query)
      if(exist !== null){ 
        return {
          statusCode: 409,
          body: JSON.stringify({ error: 'account already exist' })
        }
      }
      const orderInfo = {
        paymentInfo: [
          {
            "activated": true,
            "destination": "82YPMFzrSf1HSwUtK4DYnrTuink8cMVAzUooEY3Aedor8fjhgxikAgvfCRgjDCm4n6JCNGJBqGZcK7hy9rUSRcP5Td5y8vQ",
            "paymentLink": "monero:82YPMFzrSf1HSwUtK4DYnrTuink8cMVAzUooEY3Aedor8fjhgxikAgvfCRgjDCm4n6JCNGJBqGZcK7hy9rUSRcP5Td5y8vQ?tx_amount=0",
            "rate": "0.006537",
            "paymentMethodPaid": "0.00015297",
            "totalPaid": "0.00015297",
            "due": "0",
            "amount": "0.00015297",
            "networkFee": "0",
            "payments": [
              {
                "id": "5ed3a4b1afcbb2276e01c2197aadc1952716cc3c824981e0ce284376d32ac44e#0#104",
                "receivedDate": 1676932475,
                "value": "0.000152970000",
                "fee": "0.0000000019",
                "status": "Settled",
                "destination": "8BvH5aT2EEvQ9S2jCueoXn7rab9onCYcN7vSho2HQWvXJZ9mQMeFWeKXcjXMstFjW7CsWxbB6fscmjJeypy3QHQwJviJnBU"
              }
            ],
            "paymentMethod": "XMR",
            "cryptoCode": "XMR",
            "additionalData": {}
          }
        ],
        btcPayInvoice: 'fasdfadfa', // need to add
        nickName: 'tall chair',
        chatID: 'djlfkgj;lsdgfjjg;',
        itemList: parsed.metadata.itemList,
        lockerZipcode: parsed.metadata.lockerZipcode,
        lockerName: parsed.metadata.lockerName,
        extraNotes: parsed.metadata.extraNotes,
        type: parsed.metadata.type,
        totalSentUSD: parsed.metadata.totalSentUSD,
        taxAmountUSD: parsed.metadata.taxAmountUSD,
        itemsSubtotal: parsed.metadata.itemsSubtotal,
        bondUSD: parsed.metadata.bondUSD,
        orderFeeUSD: parsed.metadata.orderFeeUSD,
        extraAmountUSD: parsed.metadata.extraAmountUSD,
        statusHistory: [  { status :"pending approval" , timeStamp: Date.now() } ]
      }
      const doc = { 
        passphrase: numberArray, 
        metaData: { 
          email: null,
          bondAmount: 1,
          refundAddress: "testinginfo" 
        },
        orders: [
          orderInfo
        ] ,
      }
      await collection.insertOne(doc)
      client.close()
    return {
      statusCode: 200,
      body: ''
    }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500,
        body: ''
      }
    }

}
