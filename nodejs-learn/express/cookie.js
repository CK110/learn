var express = require('express');

var cookieParse = require('cookie-parser');

var app = express();

app.use(cookieParse());

app.get('/',function (req,res) {
    console.log("Cookies:",req.cookies)
});

app.listen(8081);