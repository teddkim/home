let http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = process.env.PORT || 8080;

let server = http.createServer(function (req, res) {
    let uri = url.parse(req.url);

    switch (uri.pathname) {
        case '/':
            sendFile(res, 'index.html');
            break;
        case '/index.html':
            sendFile(res, 'index.html');
            break;
        case 'images/me2.jpg':
            sendFile(res,'images/me.jpg');
            break;
        case 'images/GadgetExplorer.png':
            sendFile(res, 'images/GadgetExplorer.png');
            break;
        case 'images/GadgetExplorer2.png':
            sendFile(res, 'images/GadgetExplorer2.png');
            break;
        case 'images/Pathfind.png':
            sendFile(res, 'images/Pathfind.png');
            break;
        case 'images/Pathfind2.png':
            sendFile(res, 'images/Pathfind2.png');
            break;
        case 'images/BookSmart.png':
            sendFile(res, 'images/BookSmart.png');
            break;
        default:
            res.end('404 not found')
    }
});
server.listen(process.env.PORT || port);
console.log('listening on 8080');

// subroutines

function sendFile(res, filename) {
    fs.readFile(filename, function (error, content) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(content, 'utf-8')
    })

}
