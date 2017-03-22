var fs = require('fs');

function readFiles(files, callback) {
    var filesLeft = files.length;
    var contents = {};
    var error = null;

    var processContent = function (filePath) {
        return function (err, data) {
            // an error was previously encountered and the callback was invoked
            if (err) {
                console.error(err.message);
                return;
            }

            contents[filePath] = data;

            // after the last file read was executed, invoke the callback
            if (!--filesLeft) {
                callback(null, contents);
            }
        };

    };

    files.forEach(function (filePath) {
        fs.readFile(filePath, processContent(filePath));
    });
}


readFiles(*dirname + "/*");
