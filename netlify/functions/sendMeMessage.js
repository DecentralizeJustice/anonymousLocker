const formData = require('form-data')
const Mailgun = require('mailgun.js')
const Joi = require("joi")
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
  const messageSchema = Joi.string().required().min(0).max(99999)
  await messageSchema.validateAsync(message)


  const result = await mg.messages.create(DOMAIN, {
    from: "Anon Server <me@samples.mailgun.org>",
    to: [myEmail],
    subject: "New Anon Locker Anonymous Message!",
    text: `${message}`
  })
  console.log(result)
  return {
    statusCode: 200
  }
}