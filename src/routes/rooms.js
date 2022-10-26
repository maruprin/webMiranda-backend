const express = require('express')
const router = express.Router()
const roomsController = require('../controllers/roomsController')
router.route('/')
    .get(roomsController.showRooms)
    .post(roomsController.createRoom)

router.route('/:rooms_id')
    .get(roomsController.showRoom)
    .put(roomsController.updateRoom)
    .delete(roomsController.deleteRoom)

module.exports = router