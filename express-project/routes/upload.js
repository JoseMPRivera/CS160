var express = require('express');

/* GET items listing. */
module.exports = function(app, connection)
{
  app.post('/upload', function(req, res) {
    console.log(req);
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({file: `public/${req.body.filename}.jpg`});
    });
  })
}
