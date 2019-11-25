const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

var mysql = require('mysql');

app.post('/upload2', (req, res, next) => {
  console.log("\n\n\n ===========================================================\n\n");
  //let imageFile = req.files.file;

  console.log(req + "     " );

  // comsole.log(imageFile);
  res.send(req);

});


app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})



app.post('/upload1', (req, res) => {
  console.log("YESSSSSSSSSSSSSSSSSSSSSSSS");
  console.log(req.files.foo); // the uploaded file object

  res.send("We are working on it");
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sh100",
  database: "cs160"
});

require('./routes/')(app, con, {});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });