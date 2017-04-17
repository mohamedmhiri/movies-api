'use strict'
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

mongoose.Promise = Promise

const Schema = mongoose.Schema

const actorSchema = Schema({

  name: {
    type: String,
    required: true
  },
  birth_year: {
    type: Number,
    required: true
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  movies: [{
    type: Number,
    ref: 'Movie'
  }]
})

actorSchema.plugin(autoIncrement.plugin, 'Actor')
const Actor = mongoose.model('Actor', actorSchema)

module.exports = Actor
