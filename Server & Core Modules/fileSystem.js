// Basic Core Module
const path = require('path');
const os = require('os');
const fs = require('fs');

const myPath = 'G:/Web Development/Nodejs/Node/index.js';

fs.writeFileSync('myfile.txt', 'Hello World');
fs.appendFileSync('myfile.txt', ' Programmer');

// Synchronous
const data = fs.readFileSync('myfile.txt');

// Asynchronous
fs.readFile('myfile.txt', (err, data1) => {
    console.log(data1.toString());
});

console.log(path.parse(myPath));
console.log(os.version());
console.log(data.toString());
