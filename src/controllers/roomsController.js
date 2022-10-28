const roomsData  = require("../data/roomsData.json");

async function showRooms(req, res) {
    return res.json(roomsData)
}

async function createRoom(req, res) {
    return res.json({success: true, room:req.body})
}

async function showRoom(req, res) {
    return res.json({room: roomsData.find(room => room.id === req.params.room_id)})
}

async function updateRoom(req,res) {
    return res.json({success: true})
}

async function deleteRoom(req,res) {
    return res.json({success: true})
}

module.exports = {
    showRooms,
    createRoom,
    showRoom,
    updateRoom,
    deleteRoom
}