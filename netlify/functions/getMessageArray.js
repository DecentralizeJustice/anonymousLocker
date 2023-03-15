const mongoDBPassword = process.env.mongoDBPassword
const mongoServerLocation = process.env.mongoServerLocation
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://main:" + mongoDBPassword + "@"+ mongoServerLocation + "/?retryWrites=true&w=majority"
const Joi = require("joi")
exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  try {
    const params = event.body
    const parsed = JSON.parse(params)
    const chatID = parsed.chatID
    const chatIDSchema = Joi.string().required().hex().max(70)
    await chatIDSchema.validateAsync(chatID)
    const query = { chatID: chatID }
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    const chatCollection = client.db("chats").collection("mainChat")
    const messageArray = await chatCollection.findOne(query)
    client.close()
    if( messageArray === null){ 
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'account does not exist' })
      }
    }
  return {
    statusCode: 200,
    body: JSON.stringify(messageArray)
  }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: ''
    }
  }
}