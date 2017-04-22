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
           supertest
           .post('/api/movies')
           .set('Content-Type', 'application/json')
           .send({
            title: 'movie99',
            year: 2000
           })
           .expect(200)
           .expect((data) => {
                const movies = JSON.parse(data.text)
                movies.title === 'movie99',
                movie.year === 2000
           })
           .end(done)
        })
        it('should not allow you to create duplicate movie', (done) => {
           supertest
           .post('/api/movies')
           .set('Content-Type', 'application/json')
           .send({
            _id: 5,
            title: 'movie101',
            year: 2000
           })
           .expect(400)
           .end(done)
        })
    })
    describe('GET movies', () => {
        it('should retrieve an array of movies', (done) => {
            supertest
            .get('/api/movies')
            .expect(200)
            .expect((data) => {
                const movies = JSON.parse(data.text)
                movies.length > 0
            })            
            .end(done)
        })
    })

    describe('GET movie', () => {
        it('should retrieve a movie', (done) => {
            supertest
            .get('/api/movies/5')
            .expect(200)
            .expect((data) => {
                const movie = JSON.parse(data.text)
                movie.title === 'movie99',
                movie.year === 2000
            })            
            .end(done)
        })
        it('should respond not found when no movie exists', (done) => {
            supertest
            .get('/api/movies/ll')
            .expect(400)
            .end(done)
        })
    })
    describe('PUT movie', () => {
        it('should edit a movie', (done) => {
            const edit = {
                'title': 'movie1000',
                'year': 2011
            }

            supertest
            .put('/api/movies/5/update')
            .expect(200)
            .expect((data) => {
                const updatedMovie = JSON.parse(data.text)
                updatedMovie.title === 'movie1000',
                updatedMovie.year === 2011
            })
            .end(done)
        })
    })

    describe('DELETE movie', () => {
        it('should remove a movie', (done) => {
            supertest
            .put('/api/movies/5/delete')
            .expect(200)
            .expect((data) => {
                const deletedMovie = JSON.parse(data.text)
                deletedMovie.isDeleted === 1
            })
            .end(done)
        })
       /* it('should respond with an error message when no movie exists', (done) => {
            supertest
            .put('/api/movies/ll/delete')
            .expect(503)
            .end(done)
        })*/
    })
})
