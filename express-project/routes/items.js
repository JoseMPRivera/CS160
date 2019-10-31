var express = require('express');

/* GET items listing. */
module.exports = function(app, connection)
{
  app.get('/items', function(req, res) {
    connection.query('SELECT * FROM items', function(err ,data) {
      (err)?res.send(err):res.json({items: data})
    })
  })
}
