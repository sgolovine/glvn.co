exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not Allowed',
    }
  }

  const tempReturn = {
    message: 'Hello world',
  }

  return {
    statusCode: 200,
    body: JSON.stringify(tempReturn),
  }
}
