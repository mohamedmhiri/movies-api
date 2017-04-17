'use strict'
const express = require('express')
const router = express.Router()
const actors = require('../controllers/actor')

// books routes

router.route('/actors')
.get(actors.getAll)
.post(actors.create)

router.route('/actors/:name')
.get(actors.findByName)
router.route('/actors/:name/update')
.put(actors.updateOne)
router.route('/actors/:name/delete')
.put(actors.deleteOne)

// export router
module.exports = router
/*
app.route('/actors')
.get(actors.getAll)
.post(actors.createOne);
app.route('/actors/:id')
.get(actors.getOne)
.put(actors.updateOne)
.delete(actors.deleteOne);
app.post('/actors/:id/movies', actors.addMovie);
app.delete('/actors/:id/movies/:mid', actors.deleteMovie);
app.route('/movies')
.get(movies.getAll)
.post(movies.createOne);
app.route('/movies/:id')
.get(movies.getOne)
.put(movies.updateOne)
.delete(movies.deleteOne);
app.post('/movies/:id/actors', movies.addActor);
app.delete('/movies/:id/actors/:aid', movies.deleteActor) */
