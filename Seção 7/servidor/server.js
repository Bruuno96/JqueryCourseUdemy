const express = require('express');
const cors = require('cors');
const nedb = require('nedb');
const bodyParser = require('body-parser')
const db = new nedb({filename:'./database.db', autoload: true})
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))

// Listar livros
app.get('/books', (req, res) => {

    db.find({},(err, books) => {
        res.json(books)
    })
})

// cadastrar livros
app.post('/books', (req, res) => {
    db.insert({
        name: req.body.name,
        author: req.body.author
    },(err, doc) => {
        res.json(doc)
    })
    
})

// deletar Livros
app.delete('/books/:id', (req, res) => {
    
    db.remove({
        _id: req.params.id
    }, (err) => {
        res.json({
            sucess: true
        })
    })
})


app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000')
});