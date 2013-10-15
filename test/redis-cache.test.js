var should = require('should');
var rediscache = require('..');

describe('redis-cache', function(){
  var cache;

  before(function(done) {
    cache = rediscache();
    // Give it time to connect
    setTimeout(done, 100);
  });

  it('should store a value', function(done) {
    cache.set('set-test', 'testing123', 1, function(err) {
      if (err) return done(err);
      cache.get('set-test', function(err, value) {
        if (err) return done(err);
        should.exist(value);
        value.should.eql('testing123');
        setTimeout(function() {
          cache.get('set-test', function(err, value) {
            if (err) return done(err);
            should.not.exist(value);
            done();
          });
        }, 1000);
      });
    });
  });

  it('should return null for a non-existant key', function(done) {
    cache.get('i-dont-exist', function(err, value) {
      if (err) return done(err);
      should.not.exist(value);
      done();
    });
  });
});