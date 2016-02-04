var
    d = document.querySelector("#out"),
    ws = new WebSocket("ws://127.0.0.1:9999/");

ws.onmessage = function (e) {
    var q = JSON.parse(e.data);
    d.setAttribute(
        "style",
        "position: absolute; top:"+q.y+"px; left:"+q.x+"px;"
    );
};

var sendPacket = function(e) {
    var p = {};
    p.x = e.clientX;
    p.y = e.clientY;
    ws.send( JSON.stringify( p ) );
}

document.addEventListener("mousemove", sendPacket );
