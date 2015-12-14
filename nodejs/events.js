/* 
 * To change this license header, choose License Headers in Project Properties.
 * Demo: if there's an unhandled error event it will crash our application...
 */


var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('error', function(err) {
  console.error('Caught err:' + err.message);
});

emitter.emit('error', new Error('Test: something bad happened'));
