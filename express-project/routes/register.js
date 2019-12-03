var express = require('express');
var router = express.Router();
var con = require('../my_modules/database');
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

router.post("/", async (req, res) => {
    const {first_name, last_name, address, city, zip, email, password} = req.body;
    console.log("entered");
    console.log(req.body);
    con.query(
        `SELECT * FROM User WHERE email=?`,
        [email],
        function(error, result, fields){
            if (result.length !== 0) {
                return res.status(400).send("User already registered");
            }
            con.query(
                "INSERT INTO User(email, first_name, last_name, address, city, zip, password) VALUES(?,?,?,?,?,?,?)",
                [email, first_name, last_name, address, city, zip, password],
                function(error, result, fields){
                    if (error) {
                        console.log(error);
                        return res.status(500).send("cannot add user");
                    }
                    return res.send("registered");
                }
            )
        }
    );
});

module.exports = router;

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });