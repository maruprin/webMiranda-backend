const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contactsController')
router.route('/')
    .get(contactsController.showContacts)
    .post(contactsController.createContact)

router.route('/:contact_id')
    .get(contactsController.showContact)
    .put(contactsController.updateContact)
    .delete(contactsController.deleteContact)

module.exports = router