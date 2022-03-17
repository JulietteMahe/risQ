const router = require('express').Router();
const users=require('./users.routes');
const auth=require('./auth.routes');
const problemType=require('./problemType.routes');
const problems=require('./problems.routes');
const stateProblem=require('./state.routes');

router.use('/users',users);
router.use('/auth',auth);
router.use('/type',problemType);
router.use('/problem',problems);
router.use('/state',stateProblem);

module.exports = router;