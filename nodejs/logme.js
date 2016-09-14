/* 
 * https://nodejs.org/dist/latest-v5.x/docs/api/console.html#console_class_console
 */

var fs = require("fs");
var outp = fs.createWriteStream('./stdout.log');
var errOut = fs.createWriteStream('./stderr.log');
var logger = new console.Console(outp, errOut);

logIt("Running module:", require.main.filename, "\nsee log files: stdout.log", errOut.filename);
// use it like console
var count = 5;
logIt("Updtime", process.uptime() + " Count:", count);

// Print stack trace
//console.trace("Stack:");

// With variable number of args
function logIt() {
    var msg = "";
    for (var i=0; i < arguments.length; i++)
        msg += arguments[i] + " ";

    console.log(msg);
    logger.log(msg);
}