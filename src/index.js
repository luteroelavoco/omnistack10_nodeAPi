const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://omnistack:Lutero19@cluster0-zt5sd.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);
//Tipos de parametros 

// Query Params : request.query (Filtros, ordenação , paginação, ...)
// Route Params : request.params (Identificar um recurso na alteração ou remoção)
// Body : request.body (Dados para criação ou alteração)


// MongoDB (Não-relacional)


