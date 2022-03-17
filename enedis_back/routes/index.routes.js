const router = require('express').Router();
const users=require('./users.routes');
const auth=require('./auth.routes');
const problemType=require('./problemType.routes');

router.use('/users',users);
router.use('/auth',auth);
router.use('/type',problemType);

module.exports = router;