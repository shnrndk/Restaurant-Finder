var express = require('express');
const app = express();
var router = express.Router();


router.use('/restaurants',require('./restaurant'));

router.use('/users',require('./users'));
//  app.use('/user',user);



module.exports = router;

