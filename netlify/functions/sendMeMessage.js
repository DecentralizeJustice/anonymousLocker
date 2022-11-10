exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  const params = event.body
  const parsed = JSON.parse(params)
  const message = parsed.message
  console.log(message)
  return {
    statusCode: 200
  }
}