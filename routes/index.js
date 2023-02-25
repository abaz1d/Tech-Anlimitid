var express = require('express');
var router = express.Router();

module.exports = function () {
  router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Anlimitid Tech',
    });
    // send a ping approx every 2 seconds
    var timer = setInterval(function () {
      res.write('data: ping\n\n')

      // !!! this is the important part
      res.flush()
    }, 2000)

    res.on('close', function () {
      clearInterval(timer)
    })
    console.log('i18next is ready...', req.body);
  });

  return router;
}

// module.exports = router;
