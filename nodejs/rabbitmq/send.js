#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://127.0.0.1:5672', function (err0, connection) {
    if (err0) {
        throw err0;
    }
    connection.createChannel(function (err1, channel) {
        if (err1) {
            throw err1;
        }
        var queue = 'hello';
        var msg = 'Hello world';

        channel.assertQueue(queue, {
            durable: false
        });

        for (var i = 0; i < 5; i++) {
            msg = msg + " #" + i;
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [T] Sent %s to message broker", msg);
        }
    });

    setTimeout(function () {
        connection.close();
        process.exit(0)
    }, 500);
});

