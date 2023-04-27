const http= require("http");
const host = 'localhost';
const port = 8000;


const requestListener = function(req,res){
    res.setHeader("Content-Type","text/html");
    res.end('<html><body><h1>Monroy</h1></body></html>');
    res.end("Mi primer servidor");
}

const server = http.createServer(requestListener);

server.listen(port,host,() => { //apuntador sirve la =>
    console.log(`Server is running on http://${host}:${port}`);
})