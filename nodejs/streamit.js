/*
 Makhtar Diouf 
 File operations nodejs demo. Run on cli as: node streamit
 Streams: abstract interface for asynchronously manipulating a continuous flow of data; similar to Unix pipes
 Ref: https://www.airpair.com/javascript/node-js-tutorial
 $Id$
 */

var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

// Get current filename
var argv0 = require('path').basename(__filename);
fs.symlink(argv0, "Testfs-" + argv0, function () {
    console.log("symlinked " + argv0);
});

fs.chmod(argv0, 0644, function(){});

console.log("Processing file: " + argv0);

var password = new Buffer(process.env.PASS || 'password');
var encryptStream = crypto.createCipher('aes-256-cbc', password);

var gzip = zlib.createGzip();
var readStream = fs.createReadStream(argv0);
var writeStream = fs.createWriteStream(__dirname + '/' + argv0 + '_out.gz');

readStream // reads current file
        .pipe(encryptStream) // encrypts
        .pipe(gzip) // compresses
        .pipe(writeStream) // writes to out file
        .on('finish', function () {
            console.log('done');
        });

