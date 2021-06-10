var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', controller.index);

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Digital Movies' });
// });

module.exports = router;
