const express = require('express');
const router =  express.Router();
const routes = require('./todo-crud')



router.use('/todos', routes)


module.exports = router;