
/*
Game server API demo
http://blog.couchbase.com/making-a-game-api-server-using-nodejs-revisited
*/

var express = require("express");
var bodyParser = require("body-parser");
var couchbase = require("couchbase");
var config = require("./config");
var util = require("util");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Global declaration of the Couchbase server and bucket to be used
module.exports.bucket = (new couchbase.Cluster(config.couchbase.server)).openBucket(config.couchbase.bucket);
console.log("\nUsing DB: " + util.inspect(module.exports.bucket) + " " + module.exports.bucket.address + "\n");

// All endpoints to be used in this application
var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
