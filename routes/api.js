const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

// Request
router.get('/request',ctrl.request.indexRequest)
router.post('/request',ctrl.request.create)
router.get('/request/:id',ctrl.request.singleRequest)

// Profile

router.get('/profile/:id',ctrl.request.profileRequest)

// Offer

router.post('/request/:id/offer',ctrl.offer.create)


module.exports = router