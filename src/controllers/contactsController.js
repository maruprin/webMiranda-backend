const contactData = require("../data/contactData");

async function showContacts(req, res) {
    return res.json({contacts:contactData})
}

async function createContact(req, res) {
    return res.json({success: true, contact:req.body})
}

async function showContact(req, res) {
    return res.json({contact: contactData.find(contact => contact.id === req.params.contact_id)})
}

async function updateContact(req,res) {
    return res.json({success: true})
}

async function deleteContact(req,res) {
    return res.json({success: true})
}

module.exports = {
    showContacts,
    createContact,
    showContact,
    updateContact,
    deleteContact
}