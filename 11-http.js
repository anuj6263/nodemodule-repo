const http  = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcomne to home page')
    }
    if(req.url === '/about')
    {
        res.end('here is about')
    }
    res.end(`
        <h1> Oops! <h1>
        <p> We can find the page you're looking for <p>
        <a href="/"> Return back <a>
        `)
})

server.listen(5000)

const _ = require('loadash')

const items = [1,[2, [3, [4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)