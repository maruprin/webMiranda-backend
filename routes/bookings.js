const express = require('express')
const router = express.Router()
const bookingsController = require('../controllers/bookingsController')
router.route('/')
    .get(bookingsController.showBookings)
    .post(bookingsController.createBooking)

router.route('/:booking_id')
    .get(bookingsController.showBooking)
    .put(bookingsController.updateBooking)
    .delete(bookingsController.deleteBooking)

module.exports = router