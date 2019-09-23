const express = require('express')
const account = express.Router()

account.get('/login', (req, res) => {
    res.sendFile(__dirname+'/view/login.html')
})

account.get('/publicacoes', (req, res) => {
    res.sendFile(__dirname+'/view/formulario-publicacoes.html')
})

module.exports = account