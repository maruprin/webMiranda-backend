const usersData = require("../data/usersData")

async function showUsers(req, res) {
    return res.json({users: usersData})
}

async function createUser(req, res) {
    return res.json({success: true, user:req.body})
}

async function showUser(req, res) {
    return res.json({user: usersData.find(user => user.id === req.params.user_id)})
}

async function updateUser(req,res) {
    return res.json({success: true})
}

async function deleteUser(req,res) {
    return res.json({success: true})
}

module.exports = {
    showUsers,
    createUser,
    showUser,
    updateUser,
    deleteUser
}