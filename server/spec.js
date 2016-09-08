var app = require('./server');
var request = require('supertest'); //handles http stuff
var chai = require('chai').expect; //assertion library specifically made for tests
//MOCHA will run the test with describe

// TO DO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js
//after each you should drop the db
describe('[LIONS]', function(){
  before(function(done) {
  what = {
     name: "Christine",
     pride: "yoooooo",
     year: 3,
     gender: "female"
   };
    request(app)
      .post('/lions')
      .send(what)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('object');
        chai(resp.body.name).to.equal('Christine');
        done(); // comes from the parameter
      });
    // runs before each test in this block
  });


  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('array');
        done(); // comes from the parameter
      });
  });

  it('should create one lion', function(done) {
    var lion = {
     name: "Simba",
     pride: "WHATUP",
     year: 5,
     gender: "male"
   };
    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(201)
      .end(function(err, resp) { //use .end
        var simba = resp.body
        chai(simba).to.be.an('object');
        chai(simba.name).to.eql("Simba");
        done(); // comes from the parameter
      });
  });

  it('should get one lion', function(done) {
    request(app)
      .get('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('object');
        chai(resp.body.id).to.equal("1");
        chai(resp.body.name).to.equal("Christine");
        done(); // comes from the parameter
      });
  });

  it('should get one lion', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('array');
        done(); // comes from the parameter
      });
  });
  it('should delete lion', function(done) {
    request(app)
      .delete('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('object');
        done();
      });
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.equal([]);
        done(); // comes from the parameter
      });
  });

  it('should edit lion id 1', function(done) {
    var updateLion = {
              name: "Nala"
            }
    request(app)
      .put('/lions/2')
      .send(updateLion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('object');
        console.log("nalaaaa ",resp.body);
        chai(resp.body.name).to.equal("Nala");
        chai(resp.body.id).to.equal("2");
        chai(resp.body.pride).to.equal("WHATUP");
        done();
      });
  });

});

//Testing for tigers
describe('[TIGERS]', function(){
  it('should get all tigers', function(done) {
    request(app)
      .get('/tigers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) // expect is for request from super test
      .expect(200)
      .end(function(err, resp) { //use .end
        chai(resp.body).to.be.an('array');
        done(); // comes from the parameter
      });
  });
});
