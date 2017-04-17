'use strict'
const express = require('express')
const router = express.Router()
const movies = require('../controllers/movie')

// books routes

router.route('/movies')
.get(movies.getAll)
.post(movies.create)

router.route('/movies/:title')
.get(movies.findByName)
router.route('/movies/:name/update')
.put(movies.updateOne)
router.route('/movies/:name/delete')
.put(movies.deleteOne)

// export router
module.exports = router