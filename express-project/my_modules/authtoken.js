const jwt = require('jsonwebtoken');

generateAuthToken = user => {
    const {user_id, first_name, last_name, email} = user;
    const payload = {
        user_id,
        first_name,
        last_name,
        email
    }

    const token = jwt.sign(payload, "SECRET KEY");
    return token;
}

module.exports = generateAuthToken;