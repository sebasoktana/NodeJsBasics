const noteService = require('./Notes');
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method == 'POST') {
        console.log('POST');
        var body = ''
        req.on('data', data => {
            body += data
        })
        req.on('end', () => {
            noteService.insert(body);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Note Inserted Succesfully');
        })
        req.on('error', error => {
            console.error(error)
        })
    } else if (req.method == 'DELETE') {
        console.log('DELETE');
        var body = ''
        req.on('data', data => {
            body += data
        })
        req.on('end', () => {
            noteService.delete(body);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Note Deleted Succesfully');
        })
        req.on('error', error => {
            console.error(error)
        })
    }
    else {
        let notes = noteService.list();
        res.end(JSON.stringify(notes));
    }

});

server.listen(4242, () => {
    console.log('Server is running...');
})


