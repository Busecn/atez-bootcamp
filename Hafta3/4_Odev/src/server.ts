const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
    const pathQuery = url.parse(req.url,true);
    const fileName = `pages${pathQuery.pathname}`;

    const ext:string = path.ext(fileName);
    let content: string;

    switch (ext){
        case '.html' :
            content = 'text/html';
            break;

        case '.css' :
            content = 'text/css';
            break;

        case '.js' :
            content = 'text/javascript';
            break;

        default : break;
    }

    fs.readFile(fileName, (err,data) => {
        if(err){
            res.writeHead(404,{"Content-Type":content});
            return res.end("Sayfa bulunamadi.");
        }
        res.writeHead(200,{"Content-Type":content});
        res.write(data);
        return res.end();
    });
}).listen(1008);