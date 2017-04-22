'use strict'
const should = require('should')
// const request = require('supertest')
const assert = require('assert')
const request = require('request')
//const server = app.listen(0)
const supertest = require('supertest')('https://mysterious-bastion-28491.herokuapp.com')

describe('The World', () => {
    it('should get movie json api with Supertest', (done) => {
        supertest
            .get("/api/movies")
            .expect(200)
            .expect((data) => {
                let movies = JSON.parse(data.text)
                movies[0]._id === 0
            })            
            .end(done)
    })
})
