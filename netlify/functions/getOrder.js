const Redis = require('ioredis')
const redisPassword = process.env.redisPassword
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const bucketID = parsed.bucketID
  // console.log('Requested Bucket ID:')
  // console.log(bucketID)
  const redis = new Redis({
    host: 'redis-12641.c278.us-east-1-4.ec2.cloud.redislabs.com',
    port: 12641,
    password: redisPassword
  })
  const json = await redis.call("JSON.GET", bucketID)
  redis.disconnect()
  // console.log('databse requested')
  const parsedResponse = JSON.parse(json)
  return {
    statusCode: 200,
    body: JSON.stringify(parsedResponse),
  }
}