const fs = require('fs')

fs.writeFileSync("practice.txt", 'dummy text ')

fs.appendFileSync('practice.txt', 'next dummy text ')

fs.appendFileSync('practice.txt', 'third dummy text ')

let data = fs.readFileSync('practice.txt').toString();
console.log(data)

fs.renameSync('practice.txt', 'fsNodeModulesPractice.txt')

