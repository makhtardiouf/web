/* 
 * https://nodejs.org/dist/latest-v5.x/docs/api/console.html#console_class_console
 */

var fs = require("fs");
var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');

var logger = new console.Console(output, errorOutput);
// use it like console
var count = 5;
logger.log(process.uptime() + 'count: %d', count);

// Print stack trace
console.trace("Stack:");
