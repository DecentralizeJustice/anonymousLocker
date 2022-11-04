const pantry = require('pantry-node')
const pantryID = process.env.pantryID
const pantryClient = new pantry(pantryID) // eslint-disable-line new-cap
const options = { parseJSON: true }
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const message = parsed.message
  const sender = parsed.sender
  const bucket = parsed.bucket
  const newMessage = { from: sender, message, sent: Date.now()}
  const results = await updateBucket(bucket, [newMessage])
  return {
    statusCode: 200,
    body: JSON.stringify(results),
  }
}
async function updateBucket(bucket, newMessageArray){
  const results = await pantryClient.basket.update(bucket, { messageArray: newMessageArray}, options)
  return results 
}