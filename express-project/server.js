const express = require('express');
const app = express();
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const port = 5000 || process.env.PORT;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(express.json());
// use routes
app.use('/register', registerRouter);
app.use('/login', loginRouter);
var mysql = require('mysql');

var con = require('./my_modules/database');

require('./routes/')(app, con, {});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });