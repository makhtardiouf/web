
/*
 * take advantage of multi-core systems to handle higher load
 * create child processes that all share server ports
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    var workers = new Array();
    
    // Keep track of http requests
    var numReqs = 0;
    setInterval(function () {
        console.info("numReqs =", numReqs);
    }, 3000);

    // Count requests
    function messageHandler(msg) {
        if (msg.cmd && (msg.cmd == 'notifyRequest')) {
            numReqs += 1;
        }
    }

    // Fork workers.

    for (var i = 0; i < numCPUs; i++) {
        workers.push(cluster.fork());
        console.log("Lauched worker process on CPU" + (i + 1));
        workers[i].send('hi worker ' + workers[i].id);  // msg
    }

    Object.keys(cluster.workers).forEach(function (id) {
        cluster.workers[id].on('message', messageHandler);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died ' + signal);
    });

    cluster.on('disconnect', function () {
        console.error('worker disconnected');
    });

    cluster.fork().on('listening', function (address) {
        console.log('Workers are listening @' + address.port);
    });

} else {
    process.on('message', function (msg) {
        process.send(msg);
        console.log("msg rxed @" + process.uptime());
    });

    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");

        // notify master about the request
        process.send({cmd: 'notifyRequest'});

    }).listen(0);
}
