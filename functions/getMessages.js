'use strict';
const getMessages = require('../utils/sendRequest');

module.exports.handle = async (event) => {
  try {

    const body = JSON.parse(event.body)
    const { id, date } = body
    const { access_key } = event.headers
    console.log(id, date, access_key)

    if (!id || !date | !access_key) {
      throw Error('Missing parameters')
  }

    const messages = await getMessages(id, date, access_key);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          messages
        },
      ),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          error: error.message
        },
      ),
    };

  }

};
