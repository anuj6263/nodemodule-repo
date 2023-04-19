const spider = require('os')
console.log(spider.userInfo())

console.log(`the time is : ${spider.uptime()} seconds`)

const userobj = {
    name : spider.type(),
    release: spider.release(),
    freemem: spider.freemem(),
    totalmem: spider.totalmem(),
    interface: spider.networkInterfaces()
}

console.log(userobj)