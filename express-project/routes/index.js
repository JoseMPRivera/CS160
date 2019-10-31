var express = require('express');
var router = express.Router();
const items = require("./items");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

module.exports = function(app, db) {
  items(app, db)
}
