"use strict";
var
	// used to serve the static page
	connect = require('connect'),
	serveStatic = require('serve-static'),
	ipaddr = require('os').networkInterfaces().en0[1].address,

	// used to handle the page interactions
	WSSvr = require('ws').Server,
	wss = new WSSvr( { port: 9090 } ),

	forwardMessage = function(message) {
		for (let client of wss.clients) {
			client.send(message);
		}
	},

	ws_responder = function(ws) {
		ws.on( 'message', forwardMessage);
	},

	start = function() {
		wss.on('connection', ws_responder);

		connect().use(serveStatic(".")).listen(8080);
		console.log("WS Listening on:", ipaddr + ":9090")
		console.log("Visit: http://"+ipaddr + ":" + 8080);
	};

start();
