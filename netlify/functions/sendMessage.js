const Redis = require('ioredis')
const redisPassword = process.env.redisPassword
const redis = new Redis({
    host: 'redis-12641.c278.us-east-1-4.ec2.cloud.redislabs.com',
    port: 12641,
    password: redisPassword
});
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
  const result = await updateBucket(bucket, newMessage)
  console.log(result)
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
async function updateBucket(bucket, newMessage){
  const json = await redis.call("JSON.ARRAPPEND", bucket, 'messageArray', JSON.stringify(newMessage))
  redis.disconnect()
  return json
}