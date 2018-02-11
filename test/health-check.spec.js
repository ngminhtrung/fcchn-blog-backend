//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Health-check', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/api/health-check GET', () => {
        it('it should get "OK"', function() {
            return chai.request('app')
                .get('/health-check')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
