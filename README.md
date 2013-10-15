redis-cache [![Build Status](https://travis-ci.org/CamShaft/redis-cache.png?branch=master)](https://travis-ci.org/CamShaft/redis-cache)
===========

Simple redis cache client

Usage
-----

```js
var rediscache = require('rediscache');

var cache = rediscache('redis://127.0.0.1:6380');

// Set the ttl to 10 seconds
var ttl = 10;

cache.set('my-key', 'my-value', ttl, function(err) {
  if (err) return console.error(err);

  cache.get('my-key', function(err, value) {
    console.log(value); // 'my-value'
  });
});
```

Tests
-----

```sh
npm test
```