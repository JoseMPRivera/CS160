const jwt = require('jsonwebtoken');

generateAuthToken = user => {
    const {user_id, first_name, last_name} = user;
    const payload = {
        user_id,
        first_name,
        last_name
    }

    const token = jwt.sign(payload, "SECRET KEY");
    return token;
}

module.exports = generateAuthToken;