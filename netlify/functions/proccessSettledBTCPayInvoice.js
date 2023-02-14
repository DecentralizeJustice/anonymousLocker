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
        nickName: 'tall chair',
        itemList: parsed.metadata.itemList,
        lockerZipcode: parsed.metadata.lockerZipcode,
        lockerName: parsed.metadata.lockerName,
        extraNotes: parsed.metadata.extraNotes,
        type: parsed.metadata.type,
        totalSentUSD: parsed.metadata.totalSentUSD,
        taxAmountUSD: parsed.metadata.taxAmountUSD,
        itemSubtotal: parsed.metadata.itemSubtotal,
        bondUSD: parsed.metadata.bondUSD,
        orderFeeUSD: parsed.metadata.orderFeeUSD,
        extraAmountUSD: parsed.metadata.extraAmountUSD

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
