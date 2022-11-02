const pantry = require('pantry-node')
const pantryID = process.env.pantryID
const pantryClient = new pantry(pantryID) // eslint-disable-line new-cap
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const bucketID = parsed.bucketID
  const results = await pantryClient.basket.get(bucketID)
  return {
    statusCode: 200,
    body: JSON.stringify(results),
  }
}