const express = require('express');
const router =  express.Router();
const {getAllTodos, storeTodos, showTodos, updateTodos, deleteTodos } = require('../controllers/todoController');



router.post('/create', storeTodos)
router.get('/show/:id', showTodos)
router.put('/update', updateTodos)
router.delete('/update/:id', deleteTodos)
router.get('/', getAllTodos)


module.exports =  router;



