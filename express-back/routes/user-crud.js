const express = require('express')
const { getUser , storeUser, updateUser, deleteUser} = require('../controllers/userController')
const router = express.Router();

router.get('/show', getUser)
router.get('/store', storeUser)
router.get('/update', updateUser)
router.get('/remove', deleteUser)

module.exports = router;