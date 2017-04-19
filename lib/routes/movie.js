'use strict'
const express = require('express')
const router = express.Router()
const movies = require('../controllers/movie')

// books routes

router.route('/movies')
.get(movies.getAll)
.post(movies.create)

router.route('/movies/:_id')
.get(movies.findOne)
router.route('/movies/:_id/update')
.put(movies.updateOne)
router.route('/movies/:_id/delete')
.put(movies.deleteOne)

// export router
module.exports = router
