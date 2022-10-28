const bookingsData = require("../data/bookingsData")

async function showBookings(req, res) {
    return res.json({bookings:bookingsData})
}

async function createBooking(req, res) {
    return res.json({success: true, booking:req.body})
}

async function showBooking(req, res) {
    return res.json({booking: bookingsData.find(booking => booking.id === req.params.booking_id)})
}

async function updateBooking(req,res) {
    return res.json({success: true})
}

async function deleteBooking(req,res) {
    return res.json({success: true})
}

module.exports = {
    showBookings,
    createBooking,
    showBooking,
    updateBooking,
    deleteBooking
}