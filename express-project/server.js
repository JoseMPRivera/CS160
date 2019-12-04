const express = require('express');
const app = express();
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const bodyParser = require('body-parser')
const port = 5000 || process.env.PORT;
var con = require('./my_modules/database');
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))




// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(express.json());
// use routes
app.use('/register', registerRouter);
app.use('/login', loginRouter);
var mysql = require('mysql');
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sh100",
  database: "cs160",
  connectionLimit: 20,
  multipleStatements: true
});

app.use(express.urlencoded());

app.post('/submit-item', (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const desc = req.body.description;
  const sellerName = req.body.sellerName;
  const sellerId = req.body.sellerId;
  const sellerEmail = req.body.sellerEmail;

  (error)=>{console.info(error.config);}

  console.log("\n================================= " + title)
  console.log("\n================================= " + price)
  console.log("\n================================= " + desc)
  console.log("\n================================= " + sellerName)
  console.log("\n================================= " + sellerEmail)
  console.log("\n================================= " + sellerId)
// var sql = "INSERT INTO items (name, description, pic, price, seller_id, seller_name,seller_email) VALUES ('" + title + "', '" + desc +
//"', 'm365.jpg', '" + price + "')";
  con.getConnection(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO items (name, description, pic, price, seller_id, seller_name,seller_email) VALUES ('" + title + "', '" + desc +
                "', 'm365.jpg', '" + price +  "', '" + sellerId + "', '" + sellerName + "', '" + sellerEmail + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

  res.end()
})



// app.post('/upload2', (req, res, next) => {
//   console.log("\n\n\n ===========================================================\n\n");
//   //let imageFile = req.files.file;

//   console.log(req + "     " );

//   // comsole.log(imageFile);
//   res.send(req);

// });


// app.post('/upload', (req, res, next) => {
//   console.log(req);
//   let imageFile = req.files.file;

//   imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

//     res.json({file: `public/${req.body.filename}.jpg`});
//   });

// })



// app.post('/upload1', (req, res) => {
//   console.log("YESSSSSSSSSSSSSSSSSSSSSSSS");
//   console.log(req.files.foo); // the uploaded file object

//   res.send("We are working on it");
// });

require('./routes/')(app, con, {});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });