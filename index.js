'use strict'
const express = require('express')
const bodyParser = require('body-parser')
// Get dependencies
const http = require('http')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const autoIncrement = require('mongoose-auto-increment')
const connection = mongoose.connect('mongodb://admin:admin@ds163010.mlab.com:63010/movies')
autoIncrement.initialize(connection)

// Get our API routes
const api = require('./lib/routes/api')
const actor = require('./lib/routes/actor')
const movie = require('./lib/routes/movie')

const app = express()
// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set our api routes
app.use('/', api)
app.use('/api', actor)
app.use('/api', movie)
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000'
app.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`))