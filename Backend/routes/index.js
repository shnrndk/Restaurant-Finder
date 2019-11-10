var express = require('express');
const app = express();
var router = express.Router();


router.use('/restaurants',require('./restaurant'));
router.use('/reviews',require('./review'));

router.use('/users',require('./users'));



module.exports = router;

