var express = require('express');
var router = express.Router();
var con = require('../my_modules/database');
const auth = require('../middleware/auth');
router.get("/",  auth ,function(req, res) {
    req.self.user_id
    con.query("") //check our only logged in (put an auth befoee the route for any user related request)
    
});

module.exports = router;
