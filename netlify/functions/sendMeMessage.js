const mailgun = require("mailgun-js");
const myEmail = process.env.myEmail
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.mailGunDomain
console.log(myEmail)
console.log(MAILGUN_API_KEY)
console.log(DOMAIN)
const mg = mailgun({apiKey: MAILGUN_API_KEY, domain: DOMAIN});
exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const message = parsed.message
  const data = {
    from: 'Anon Locker <me@samples.mailgun.org>',
    to: myEmail,
    subject: 'New Anon Locker Anonymous Message',
    text: `${message}`
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
  return {
    statusCode: 200
  }
}