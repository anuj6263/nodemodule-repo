const path = require('path')

const filePath = path.join('9-path.js','app.js')
console.log(filePath)

basename1 = path.basename(filePath)
console.log(basename1)

resolved = path.resolve('as','app.js')
console.log(resolved)