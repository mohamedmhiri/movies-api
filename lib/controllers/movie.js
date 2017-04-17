'use strict'
let Movie = require('../models/movie')

module.exports = {
  getAll (req, res) {
    let response = {}
    Movie
            .find({isDeleted: 0})
            .populate('movies')
            .exec((err, data) => {
            // Mongo command to fetch all data from collection.
              if (err) {
                return res.status(400).json(err)
              } else {
                response = data
              }
              res.json(response)
            })
  },
  findByName (req, res) {
    let response = {}
        // we specifie the interval of price by req
    Movie.findOne({name: req.params.name})
            .populate('movies')
            .exec((err, data) => {
              if (err) {
                return res.status(400).json(err)
              } else {
                response = data
              }
              res.json(response)
            })
  },
  create (req, res) {
    let db = new Movie(req.body)

    let response = {}
    db.save(function (err, data) {
            // save() will run insert() command of MongoDB.
            // it will add new data in collection.
      if (err) {
        return res.status(400).json(err)
      } else {
        response = data
      }
      res.json(response)
    })
  },
  deleteOne (req, res) {
    let response = {}
    Movie.findOneAndUpdate({name: req.params.name}, req.body, (err, movie) => {
      if (err) return res.status(400).json(err)
      else {
        movie.isDeleted = 1
        response = movie
      }
      res.json(response)
    })
  },
  updateOne (req, res) {
    let response = {}
    Movie.findOneAndUpdate({ name: req.params.name }, req.body, (err, movie) => {
      if (err) return res.status(400).json(err)
      else {
        response = movie
      }
      res.json(response)
    })
  }
}
