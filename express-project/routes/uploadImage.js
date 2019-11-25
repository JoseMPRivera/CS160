const express = require('express');
const app = express();



// var express = require('express');

module.exports = function(app, connection)
{
    app.post('/upload', function(req, res) {
        
        console.log("noooooooooooooooooo");
        res.send('YESSSSSSSSSSSSSSSSSSSSSSSS');
    //   connection.query('SELECT * FROM items', function(err ,data) {
    //     (err)?res.send(err):res.json({items: data})
    //   })
    })
  }

// thomas commented out this
// router.get('/upload', function(req, res) {
//     console.log("noooooooooooooooooo");
//     res.send('YESSSSSSSSSSSSSSSSSSSSSSSS');
// });

// module.exports = router;