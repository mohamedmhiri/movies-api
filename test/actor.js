'use strict'
const should = require('should')
// const request = require('supertest')
const assert = require('assert')
const request = require('request')
//const server = app.listen(0)
const supertest = require('supertest')('https://mysterious-bastion-28491.herokuapp.com')

describe('Actors', () => {
    describe('POST actor', () => {
        it('should add a new actor', (done) => {
            setTimeout(done, 30000)
            supertest
            .post('/api/actors')
            .set('Content-Type', 'application/json')
            .send({
                name: 'actor99',
                birth_year: 2000
            })
            .expect(200, done)
           ///.end(done)
        })
        it('should not allow you to create duplicate actor', (done) => {
            setTimeout(done, 30000)
            supertest
            .post('/api/actors')
            .set('Content-Type', 'application/json')
            .send({
                _id: 5,
                name: 'actor101',
                birth_year: 2000
            })
            .expect(400, done)
           //.end(done)
        })
    })
    describe('GET actors', () => {
        it('should retrieve an array of actors', (done) => {
            setTimeout(done, 30000)
            supertest
            .get('/api/actors')
            .expect(200, done)
        })
    })

    describe('GET actor', () => {
        it('should retrieve an actor', (done) => {
            setTimeout(done, 30000)
            supertest
            .get('/api/actors/5')
            .expect(200,{
                __v: 0,
                _id: 5,
                movies: [],
                isDeleted: 0,
                name: 'actor3',
                birth_year: 1994
            }, done)
            //.end(done)
        })
        it('should respond not found when no actor exists', (done) => {
            setTimeout(done, 30000)
            supertest
            .get('/api/actors/ll')
            .expect(400, done)
            //.end(done)
        })
    })
    describe('PUT actor', () => {
        it('should edit an actor', (done) => {
            setTimeout(done, 30000)
            const edit = {
                'name': 'actor1000',
                'birth_year': 2011
            }
            supertest
            .put('/api/actors/5/update')
            .set('Content-Type', 'application/json')
            .send(edit)
            .expect(200, done)
            //.end(done)
        })
    })

    describe('DELETE actor', () => {
        it('should remove an actor', (done) => {
            setTimeout(done, 30000)
            supertest
            .put('/api/actors/5/delete')
            .expect(200, done)
            //.end(done)
        })
        it('should respond with an error message when no actor exists', (done) => {
            supertest
            .put('/api/actors/ll/delete')
            .expect(400, done)
        })
    })
})
