"use strict";
var
	port = 9999,
    ws_svr = require('ws').Server,
    ws_config = { port: port },
    wss = new ws_svr(ws_config),

    ws_responder = function(ws) {

        ws.on('message', function(message) {
            console.log('received: %s', message);

            for (let i of wss.clients) {
                i.send(message);
            }

        });

        ws.send('server ready >');
    },

	ipaddr = require('os').networkInterfaces().en0[1].address;

wss.on('connection', ws_responder);
console.log("Listening on:", ipaddr + ":" + port)
