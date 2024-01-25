
var express  = require('express');
var app =  express();
app.use(express.static('public'));
app.listen(8080, ()=>{

    console.log('server Running on the 8080 port')

})