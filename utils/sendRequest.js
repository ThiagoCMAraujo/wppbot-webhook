const axios = require('axios')


module.exports = async function getMessages(id, date, access_key) {

    let webhookMessage = axios.create({
        baseURL: 'https://dwenjn7gt9.execute-api.us-east-1.amazonaws.com',
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' }
    });

    const { data } = await webhookMessage.post(`/listMessages`, {
        id,
        date,
        access_key
    })

    return data
}

