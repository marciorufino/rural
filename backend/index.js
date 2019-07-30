const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
    res.sendFile(https://github.com/marciorufino/ruralnbr/blob/master/backend/view/index.html)
})

app.get('/artigos', (req, res) => {
    res.sendFile(__dirname+'/View/artigos.html')
})

app.get('/eventos', (req, res) => {
    res.sendFile(__dirname+'/View/listEventos.html')
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
