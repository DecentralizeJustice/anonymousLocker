const Redis = require('ioredis')
const redisPassword = process.env.redisPassword
const formData = require('form-data')
const Mailgun = require('mailgun.js')
const mailgun = new Mailgun(formData);
const myEmail = process.env.myEmail
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.mailGunDomain
const mg = mailgun.client({username: 'api', key: MAILGUN_API_KEY});
exports.handler = async (event) => {
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
  if (sender !== 'dgoon') {
    await mg.messages.create(DOMAIN, {
      from: "Anon Server <me@samples.mailgun.org>",
      to: [myEmail],
      subject: "New Anon Locker Message From Customer!",
      text: `You got another message from a customer!`
    })
  }
  console.log(result)
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
async function updateBucket(bucket, newMessage){
  const redis = new Redis({
    host: 'redis-12641.c278.us-east-1-4.ec2.cloud.redislabs.com',
    port: 12641,
    password: redisPassword
  })
  const json = await redis.call("JSON.ARRAPPEND", bucket, 'messageArray', JSON.stringify(newMessage))
  redis.disconnect()
  return json
}