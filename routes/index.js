var express = require('express');
var router = express.Router();

module.exports = function () {
  router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Anlimitid',
    });
    console.log('i18next is ready...', req.body);
  });

  return router;
}

// module.exports = router;
