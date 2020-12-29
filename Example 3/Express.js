const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const editor = require("./Notes");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    bodyParser.json({
        verify: (req, res, buf, encoding) => { req.rawBody = buf.toString(); },
    })(req, res, (err) => {
        if (err) {
            //console.log(err);
            res.sendStatus(400);
            return;
        }
        next();
    });
});


app.get('/', async  (req, res) => {
    const text = await editor.read();
    res.send(text);
})

app.post('/', async (req, res) => {
    console.log(req.body);
    await editor.insert(req.body);
    res.send('Got a POST request')
})

app.put('/notes/:id', async (req, res) => {
    let id = req.params.id;
    await editor.update(req.body, id);
    res.send('Note updated successfully');
})

app.delete('/notes/:id', async (req, res) => {
    let id = req.params.id;
    await editor.delete(id);
    res.send('Note deleted successfully');
})

app.listen(4242, () => {
    console.log('Server is running...');
})