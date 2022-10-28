const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
router.route('/')
    .get(usersController.showUsers)
    .post(usersController.createUser)

router.route('/:user_id')
    .get(usersController.showUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router