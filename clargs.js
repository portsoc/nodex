"use strict";

var report = function (val, index) {
  console.log(`${val} : ${index}`);
}

for (let i=0; i<process.argv.length; i++) {
    report(i, process.argv[i]);
}
