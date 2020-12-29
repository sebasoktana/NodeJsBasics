const editor = require("./Edition");
const http = require('http');

const server = http.createServer();
server.on('request', async (req, res) => {
    const text = await editor.read();
    console.log(req.url);
    //console.log(JSON.stringify(text));
    res.end(text);

})


server.listen(4242, () => {
    console.log('Server is running...');
})