/*
* Echo back Request to Response

* https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
*/
var util = require('util');
var http = require('http');
var srv = http.createServer();

srv.on('request', function(req, resp) {
    req.on('error', function(err) {
        console.error(err);
        resp.statusCode = 400;
        resp.end();
    });

    resp.on('error', function(err) {
        console.error(err);
    });

    if (req.method === 'GET' && req.url === '/echo') {
        console.log(util.inspect(req.headers));
        req.pipe(resp);
        
    } else {
        //    resp.statusCode = 404;
        resp.write("Add /echo to the url to view back your input");
        resp.end();
    }
});

srv.listen(9001);
console.log("Node app listening @ " + util.inspect(srv.address()));