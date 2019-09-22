const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname,"public")))

app.use(express.static('.'))

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/view/index.html')
})

app.get('/artigos', (req, res) => {
    res.sendFile(__dirname+'/view/artigos.html')
})

app.get('/eventos', (req, res) => {
    res.sendFile(__dirname+'/view/listEventos.html')
})

app.get('/tempo', (req, res) => {
    res.sendFile(__dirname+'/view/previsao-tempo.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/view/login.html')
})

app.get('/publicacoes', (req, res) => {
    res.sendFile(__dirname+'/view/formulario-publicacoes.html')
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});

