const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  try {
    const params = event.body
    const parsed = JSON.parse(params)
    const accountPhrase = parsed.accountPhrase
    const numberArray = accountPhrase
    const query = { passphrase: numberArray }
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    const collection = client.db("accounts").collection("accountInfo")
    const accountInfo = await collection.findOne(query)
    client.close()
    if(accountInfo === null){ 
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'account does not exist' })
      }
    }
    delete accountInfo['_id']
    console.log(accountInfo)
  return {
    statusCode: 200,
    body: JSON.stringify(accountInfo)
  }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
}