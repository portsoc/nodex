"use strict";
var
	port = 9999,
	ws_svr = require('ws').Server,
	ws_config = {
		port: port
	},
	wss = new ws_svr(ws_config),
	ws_responder = function(ws) {

		ws.on('message', function(message) {
			console.log('received: %s', message);

			for (var i=0; i<wss.clients.length; i++) {
				wss.clients[i].send(message);
			}

		});

		ws.send('{"x":0,"y":0}');
	},


	ipaddr = "127.0.0.1",
	add = require('os').networkInterfaces();


if (add.en0) {
	ipaddr = add.en0[1].address;
}
if (add.eth0) {
	ipaddr = add.eth0[0].address;
}

wss.on('connection', ws_responder);
console.log("WS Listening on:", ipaddr + ":" + port)

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(".")).listen(8080);

console.log("Visit: http://"+ipaddr + ":" + 8080);
