var express = require('express');
var os = require("os");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var hostname = os.hostname();
  res.send(''.concat('respond with a resource',hostname));
});

module.exports = router;
