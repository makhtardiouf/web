var fs = require('fs');

function readFiles(err, files) {
    var filesLeft = files.length;
    var contents = {};
    var error = null;

    var processContent = function(filePath) {
        return function(err, data) {
            // an error was previously encountered and the callback was invoked
            if (err) {
                console.error("Error reading file", err.message);
                return;
            }

            contents[filePath] = data;

            // after the last file read was executed, invoke the callback
           // if (!--filesLeft) {
                //  callback(null, contents);                
          //  }
          
        };
    };

    if (typeof files != "object") {
        console.error("No files detected", files);
        return;
    }

    files.forEach(function(filePath) {
        fs.stat(filePath, (e, st) => {
            if(e) {
                console.log("File processing error", filePath, e.message);
                return;
            }

            if(st.isFile()) {
                console.log(filePath, parseFloat(st.size / 1024).toFixed(2), "KB");
                fs.readFile(filePath, processContent(filePath));
            }
        });
    });
}

fs.readdir(__dirname, readFiles);