var express = require('express');
var router = express.Router();
var con = require('../my_modules/database');
const tokengen = require('../my_modules/authtoken');
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

router.post("/", async (req, res) => {
    const {email, password} = req.body;
    con.query(
        'SELECT * FROM User WHERE email=? AND password=?',
        [email, password],
        function(error, result) {
            if (result.length === 1) {
                const token = tokengen(result[0]);
                return res.header("x-auth-token", token).send("logged in");
            }
            return res.status(401).send("Email or password incorrect");
        }
    )
});

module.exports = router;
