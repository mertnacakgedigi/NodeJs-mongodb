const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

// Request
router.get('/request',ctrl.request.indexRequest)
router.post('/request',ctrl.request.create)


module.exports = router