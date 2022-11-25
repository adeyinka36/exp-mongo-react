const express = require('express');
const router =  express.Router();
const todoRoutes = require('./todo-crud');
const userRoutes =  require('./user-crud');



router.use('/todos', todoRoutes)
router.use('/users', userRoutes)


module.exports = router;