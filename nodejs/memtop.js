/** Print memory usage
 * https://www.airpair.com/#3-3-events
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function MemoryWatcher(opts) {
    if (!(this instanceof MemoryWatcher)) {
        return new MemoryWatcher();
    }

    opts = opts || {
        frequency: 30000 // 30 seconds
    };

    EventEmitter.call(this);

    var that = this;

    setInterval(function () {
        var bytes = process.memoryUsage().rss;

//        if (opts.maxBytes && (bytes > opts.maxBytes)) {
//            that.emit('error', new Error('Memory exceeded ' + opts.maxBytes + ' bytes'));
//        } else {
            that.emit('data', bytes);
     //   }

    }, opts.frequency);
}

util.inherits(MemoryWatcher, EventEmitter);
require('child_process').fork();
// using it

var mem = new MemoryWatcher({
    maxBytes: 5000000, // 5MB?
    frequency: 5000
});

mem.on('data', function (bytes) {
    console.log("Mem: " + bytes);
});

mem.on('error', function (err) {
    // throw err;
    console.log("Error: " + err.message);
});