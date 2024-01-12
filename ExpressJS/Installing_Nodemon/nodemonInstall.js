const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('Hello World!');
    res.end();
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
