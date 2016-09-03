/*
 Node Web server demo
 Makhtar
*/
const util = require('util');
const os = require('os');
const http = require('http');
var server = http.createServer();

server.on('request', function(req, resp) {

    req.on('error', function(err){
        console.error("Error on request: " + err.message);
    });

    console.log("Rxed request " + req.url + " @" + Date.now());
    console.log("\nHeaders:\n" + util.inspect(req.headers['user-agent']));

    resp.on('error', function(err){
        console.error("Error on response: " + err.message);
    });

    sendResp(resp);   
});

// Node auto-sends default headers, so we can just write the body here

function sendResp(resp) {
    resp.write('<html>');
    resp.write('<body>');
    resp.write('<h2>Hello, Node World!</h2>');
    resp.write('<p>Welcome to ' + os.hostname());
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
}

// Listen after setting up the necessary hooks above
// Can remove the param to attach on a random port
server.listen(9000);
console.log("Node app listening @ " + util.inspect(server.address())); 