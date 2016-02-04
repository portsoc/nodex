"use strict";
var fs = require("fs");

if (process.argv.length<4) {
    console.log("node cp2 <from> <to>");
    process.exit(1);
}

var from = process.argv[2];
var to = process.argv[3];

console.log(`Copying from ${from}\nTo ${to}`);

var data = fs.readFileSync(from);
fs.writeFileSync(to, data)

console.log(`${data.length} bytes copied.`);
