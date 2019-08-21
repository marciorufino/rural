const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/view/index.html')
})

app.get('/artigos', (req, res) => {
    res.sendFile(__dirname+'/view/artigos.html')
})

app.get('/eventos', (req, res) => {
    res.sendFile(__dirname+'/view/listEventos.html')
})

app.get('/weather?a726c345&city_name=Natal,RN', (req, res) => {
    res.sendFile(__dirname+'/hg-weather-js-1.0/index.html')
})
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});