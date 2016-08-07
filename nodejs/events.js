/* 
 * Demo node events: 
 * if there's an unhandled error event it will crash the app...
 * Makhtar
 */
console.log("Running from " + process.cwd() + "...\n");

const util = require('util');
var EventEmitter = require('events').EventEmitter;
var txer = new EventEmitter();
var nEvents = 0;

function evHandler(a, b) {
      console.log("\nReceived event with params: " + a + " " + b);
      nEvents++;
};

txer.on('newListener', function(ev, rxer) {
  console.log("New event listener added: " + ev.eventName + " " + rxer)
  nEvents++;
  });
  
txer.on('event', evHandler);
// Alias to:
//txer.addListener('event', evHandler);

txer.on('error', function(err) {
  console.error('Caught Test error: ' + err.message);
  nEvents++;
});

txer.emit('event', 10, 15);
txer.emit('error', new Error('something bad happened'));

process.on('exit', function(){console.log(nEvents + " events caught by the handlers")});
console.log("Mem usage: " + util.inspect(process.memoryUsage()));
