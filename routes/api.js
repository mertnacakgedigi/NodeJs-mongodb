const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.post('/request',ctrl.request.create)


module.exports = router