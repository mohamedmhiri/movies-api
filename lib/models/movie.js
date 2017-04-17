'use strict'
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

mongoose.Promise = Promise

const Schema = mongoose.Schema

const movieSchema = Schema({

  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  actors: [{
    type: Number,
    ref: 'Actor'
  }]
})

movieSchema.plugin(autoIncrement.plugin, 'Movie')
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
