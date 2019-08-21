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
<<<<<<< HEAD
=======

>>>>>>> 39e927ff5a06da0ea7447cb1ddc71994c2cbd5b1
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
<<<<<<< HEAD
});
=======
});
>>>>>>> 39e927ff5a06da0ea7447cb1ddc71994c2cbd5b1
