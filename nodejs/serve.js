/*
 Node Web server demo
 Makhtar Diouf
*/
const util = require('util');
const os = require('os');
const http = require('http');
var server = http.createServer();
var nReq = 0;

server.on('request', function (req, resp) {
    try {
        req.on('error', function (err) {
            console.error("Request error: ", err.message);
        });

        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
          }).on('end', () => {
             body = Buffer.concat(body).toString();   
             console.log(body);
          });

        resp.on('error', function (err) {
            console.error("Response error: ", err.message);
        });

        nReq++;
        const {method, url} = req;

        console.log(Date().toLocaleString(), "rxed request", nReq, ":", method, url);

        console.log("\nHeaders:", util.inspect(req.headers['user-agent']));

        sendResp(resp);
    } catch (e) {
        console.error("Server error:", e.message);
    }
});

// Node auto-sends default headers, so we can just write the body here

function sendResp(resp) {
    var outp = "<html>" +
        "<body>" +
        "<h2>Hello, Node World!</h2>" +
        "<p>Welcome to " + os.hostname() + "</p>" +
        Date().toLocaleString() +
        "</body>" +
        "</html>";

    resp.write(outp);
    resp.end();
}

// Listen after setting up the necessary hooks above
// Can remove the param to attach on a random port
server.listen(9200);
console.log("Node app listening @ " + util.inspect(server.address()));