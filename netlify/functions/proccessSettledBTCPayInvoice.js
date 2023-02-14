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
    console.log(event.body)
    const collection = client.db("accounts").collection("accountInfo")
    const query = { passphrase: "testfinginfjkhk" }
    const exist = await collection.findOne(query)
    if(exist !== null){ 
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'account already exist' })
      }
    }
    const doc = { passphrase: "testfinginfjkhk", data: { test: true } }
    await collection.insertOne(doc)
    client.close()
  return {
    statusCode: 200,
    body: ''
  }
}
