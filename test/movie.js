'use strict'
const should = require('should')
// const request = require('supertest')
const assert = require('assert')
const request = require('request')
//const server = app.listen(0)
const supertest = require('supertest')('https://mysterious-bastion-28491.herokuapp.com')

describe('Movies', () => {
    describe('POST movie', () => {
        it('should add a new movie', (done) => {
            setTimeout(done, 30000)
            supertest
            .post('/api/movies')
            .set('Content-Type', 'application/json')
            .send({
                title: 'movie99',
                year: 2000
            })
            .expect(200, done)
           ///.end(done)
        })
        it('should not allow you to create duplicate movie', (done) => {
            setTimeout(done, 30000)
            supertest
            .post('/api/movies')
            .set('Content-Type', 'application/json')
            .send({
                _id: 5,
                title: 'movie101',
                year: 2000
            })
            .expect(400, done)
           //.end(done)
        })
    })
    describe('GET movies', () => {
        it('should retrieve an array of movies', (done) => {
            setTimeout(done, 30000)
            supertest
            .get('/api/movies')
            .expect(200, done)
        })
    })

    describe('GET movie', () => {
        it('should retrieve a movie', (done) => {
            setTimeout(done, 30000)
            supertest
            .get('/api/movies/5')
            .expect(200,{
                __v: 0,
                _id: 5,
                actors: [],
                isDeleted: 0,
                title: 'movie1000',
                year: 2011
            }, done)
            //.end(done)
        })
        it('should respond not found when no movie exists', (done) => {
            setTimeout(done, 30000)
            supertest
            .get('/api/movies/ll')
            .expect(400, done)
            //.end(done)
        })
    })
    describe('PUT movie', () => {
        it('should edit a movie', (done) => {
            setTimeout(done, 30000)
            const edit = {
                'title': 'movie1000',
                'year': 2011
            }
            supertest
            .put('/api/movies/5/update')
            .set('Content-Type', 'application/json')
            .send(edit)
            .expect(200, done)
            //.end(done)
        })
    })

    describe('DELETE movie', () => {
        it('should remove a movie', (done) => {
            setTimeout(done, 30000)
            supertest
            .put('/api/movies/5/delete')
            .expect(200, done)
            //.end(done)
        })
        it('should respond with an error message when no movie exists', (done) => {
            supertest
            .put('/api/movies/ll/delete')
            .expect(400, done)
        })
    })
})
