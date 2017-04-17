'use strict'
let Actor = require('../models/actor')

module.exports = {
  getAll (req, res) {
    let response = {}
    Actor
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
    Actor
      .findOne({name: req.params.name})
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
    let db = new Actor(req.body)
    let response = {}
    db.save(function (err, actor) {
            // save() will run insert() command of MongoDB.
            // it will add new data in collection.
      if (err) {
        return res.status(400).json(err)
      } else {
        response = actor
      }
      res.json(response)
    })
  },
  deleteOne (req, res) {
    let response = {}
    Actor.findOneAndUpdate({name: req.params.name}, req.body, (err, actor) => {
      if (err) return res.status(400).json(err)
      else {
        actor.isDeleted = 1
        response = actor
      }
      res.json(response)
    })
  },
  updateOne (req, res) {
    let response = {}
    Actor.findOneAndUpdate({ name: req.params.name }, req.body, (err, actor) => {
      if (err) return res.status(400).json(err)
      else {
        response = actor
      }
      res.json(response)
    })
  }
}
