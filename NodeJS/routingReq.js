const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<head><tittle>Enter Message</tittle></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write("<html>")
    res.write('<head><tittle>My First Page</tittle></head>')
    res.write('<body><h1>Hello From My NodeJS Server</h1></body>')
    res.write('</html>')

})

server.listen(3000);    