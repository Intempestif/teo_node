// ceci est exécuté quand je fais $ npm start dans la console ( voir package.json )
const express = require('express');
const app = express(); // app est un nom donné car bonne pratique

require('dotenv').config({path: './config/.env'});

require('./config/db.js');

app.listen(process.env.PORT, () => {
    console.log('Serveur démarré.');
});

app.get('/', (req, res) => {
    res.send('sur /');
});

app.get('/post', (req, res) => {
    res.send('sur /post');
});