const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.port || 8080;

app.use(express.static('my_tetris'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'./index.html'));
});

app.listen(PORT);

console.log('The app running app at Port ' + PORT);
