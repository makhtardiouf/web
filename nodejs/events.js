/* 
 * Demo node events: 
 * if there's an unhandled error event it will crash the app...
 * Makhtar
 */

const os = require('os');
const util = require('util');
var EventEmitter = require('events').EventEmitter;
var evTxer = new EventEmitter();
var nEvents = 0;

console.log("Running on " + os.hostname() + "\nFolder " + process.cwd() + "...\n");

function evHandler(a, b) {
    console.log("\nReceived event with params: " + a + " " + b);
    nEvents++;
};

evTxer.on('newListener', function(ev, rxer) {
    console.log("New event listener added: " + ev.eventName + " " + rxer)
    nEvents++;
});

evTxer.on('testFunc', evHandler);
// Alias to:
//evTxer.addListener('testFunc', evHandler);

evTxer.on('error', function(err) {
    console.error('Caught Test error: ' + err.message);
    nEvents++;
});

try {
    evTxer.emit('testFunc', 10, 15);
    evTxer.emit('error', new Error('something bad happened'));
    console.log("Registered events: " + evTxer.eventNames());

    process.on('exit', function() {
        console.log(nEvents + " events caught by the handlers")
    });
    console.log("Mem usage: " + util.inspect(process.memoryUsage()));

} catch (err) {
    console.log(err);
}
