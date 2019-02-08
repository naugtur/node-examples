const sessionFactory = require('supertest-session')
const app = require('./app.js')
const session = sessionFactory(app)
const assert = require('assert')

describe('GET /', () => {
    it('should just work', () =>
        session
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
    )
})

describe('GET /private', () => {
    it('should fail without a session', () =>
        session
            .get('/private/')
            .expect(401)
    )
})
describe('AUTHORIZED GET /private', () => {
    before(() => session
        .post('/login')
        .send('user=bob&password=123456')
        .expect(302))

    it('should work with a session', () =>
        session
            .get('/private/')
            .expect(200)
    )
    it('should still have access to public', () =>
        session
            .get('/')
            .expect(200)
    )
    describe('new session', () => {
        const otherSession = sessionFactory(app)

        before(() => otherSession
            .post('/login')
            .send('user=bob&password=123456')
            .expect(302))

        it('should still work', () =>
            otherSession
                .get('/private/')
                .expect(200)
        )
        it('should not break previous session', () =>
            session
                .get('/private/')
                .expect(200)
        )
        it('should not have the same cookie', () =>
            assert.notEqual(session.cookies[0].value, otherSession.cookies[0].value)
        )
    })
})
describe('HACKERS GET /private', () => {
    before(() => session.cookies[0].value = '123')

    it('should not accept an invalid cookie', () =>
        session
            .get('/private/')
            .expect(401)
    )

})

