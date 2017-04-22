'use strict'
const should = require('should')
// const request = require('supertest')
const assert = require('assert')
const request = require('request')
//const server = app.listen(0)
const supertest = require('supertest')('https://mysterious-bastion-28491.herokuapp.com')

describe('The World', () => {
    it('should get "api works" at the root with Supertest', (done) => {
        supertest
            .get("/")
            .expect(200)
            .expect('"api works"')
            .end(done)
    })
})
