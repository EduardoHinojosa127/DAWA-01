var http = require('http');
fs = require('fs');

var html1 = fs.readFileSync('./home.html');
var html2 = fs.readFileSync('./nosotros.html');
var html3 = fs.readFileSync('./nuestrosservicios.html');
var html4 = fs.readFileSync('./catalogo.html');
var html5 = fs.readFileSync('./contactenos.html');

const server = http.createServer((req, res)=>{
    const url = req.url;

    if (url === '/'){
        res.write(html1)
    }
    else if(url==="/nosotros"){
        res.write(html2)
    }
    else if(url==="/nuestrosservicios"){
        res.write(html3)
    }
    else if(url==="/catalogo"){
        res.write(html4)
    }
    else if(url==="/contactenos"){
        res.write(html5)
    }
    else{
        res.write('Pagina no encontrada')
    }
    res.end();
});

server.listen(8081);