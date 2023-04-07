var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res) {
  const year = new Date().getFullYear()
  res.json({year: year})
});

module.exports = router;
