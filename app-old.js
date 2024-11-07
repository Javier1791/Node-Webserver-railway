const http = require('http')

http.createServer((req,resp)=>{
    console.log(req);
    resp.write('Hola mundo');
    resp.end();
})

.listen(8080);
console.log('escuchando en el puerto',8080);