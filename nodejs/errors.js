/*
  NodeJs Errors triggering and handling
  https://nodejs.org/dist/latest-v6.x/docs/api/errors.html
  Makhtar

*/
const fs = require('fs');
const util = require('util');

function TestBadVar() {
    // Throws ReferenceError 
    try {
        const m = 1;
        const n = m + z; //  z is undefined

    } catch (err) {

        console.log("Caught error: " + err.message);
    }

}


function TestInexistingFile(fname) {

    fs.readFile(fname, (err, data) => {
        if (err) {
            console.error('There was an error reading the file!', err.message);
            return;
        }

        // Otherwise handle the data
        fs.stat(fname, function(err, stats) {
            console.log("File info of " + fname + "\n" + util.inspect(stats));
        });
    });
}

TestBadVar();

var fname = "FakeFile.txt";

TestInexistingFile(fname);
// Now create the non-existing file
console.log("Creating file " + fname + "...");
fs.createWriteStream(fname);
TestInexistingFile(fname);

