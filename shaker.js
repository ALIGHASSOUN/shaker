const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('dfdfdfdfdf')
        res.write('\n')
        res.end('shaker shaker')
    }
    if (req.url === '/about') {
        res.end(`
            <h1> oops </h1> 
            <p> we cant .. </p> 
            <a href= "/" > back home </a>
        `)
    }
})
server.listen(5000)