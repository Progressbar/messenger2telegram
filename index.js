const axios = require('axios')

const VERIFY_TOKEN = 'PBMSNGER2TELEGRAM'
const telegramUrl = 'https://api.telegram.org/bot'
const telegramToken = 'HEHE'

/**
* A basic reply bot
* @returns {object}
*/
module.exports = async function (context, req, res) {  
  res.writeHead(200, { 'Content-Type': 'application/json'});
  const fbMode = req.query['hub.mode']
  const fbToken = req.query['hub.verify_token']
  const fbChallenge = req.query['hub.challenge']

  if (fbMode && fbToken) {
    if (fbMode === 'subscribe' && fbToken === VERIFY_TOKEN) {
      return res.end(fbChallenge)
    }

    res.writeHead(403, { 'Content-Type': 'application/json'});
    return res.end()
  }

  const data = {
    chat_id: '-1001217820990',
    text: `New message from ${'Meno neviem vytiahnut z API zatial :/'}`
  }

  await axios({
    url: `${telegramUrl}${telegramToken}/sendMessage`,
    data
  })

  return res.end()
}
