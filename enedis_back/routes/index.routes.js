const router = require('express').Router();
const users=require('./users.routes');
const auth=require('./auth.routes');

router.use('/users',users);
router.use('/auth',auth);
module.exports = router;