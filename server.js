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
        case '/me2.jpg':
            sendFile(res,'images/me2.jpg');
            break;
        case '/GadgetExplorer.png':
            sendFile(res, 'images/GadgetExplorer.png');
            break;
        case '/GadgetExplorer2.png':
            sendFile(res, 'images/GadgetExplorer2.png');
            break;
        case '/Pathfind.png':
            sendFile(res, 'images/Pathfind.png');
            break;
        case '/Pathfind2.png':
            sendFile(res, 'images/Pathfind2.png');
            break;
        case '/BookSmart.png':
            sendFile(res, 'images/BookSmart.png');
            break;
        case '/OIE3460.png':
            sendFile(res,'images/OIE3460.png');
            break;
        case '/github.png':
            sendFile(res,'images/github.png');
            break;
        case '/instagram.png':
            sendFile(res,'images/instagram.png');
            break;
        case '/email.png':
            sendFile(res,'images/email.png');
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