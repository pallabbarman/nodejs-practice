const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

// write stream
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

// using pipe
readStream.pipe(writeStream);
