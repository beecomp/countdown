var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:hours.:minutes.:seconds', function(req, res, next) {
  const {hours, minutes, seconds} = req.params;
  res.render('index', { title: 'Countdown', hours: hours, minutes: minutes, seconds: seconds});
});

module.exports = router;
