/**
 * Created by a.gupta1409 on 15-04-2017.
 */

const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express();

function m1(req,res,next) {
    console.log('We are in middleware 1');
    next();
}
function m2(req,res,next) {
    console.log('We are in middleware 2');
    next();
}

function fourzerofour(req,res,next) {
    console.log("error");
    res.send("This file is not here")
    next();
}

app.use(m1)
app.use(m2)

app.get('/',function (req,res) {
    console.log("get method")
    res.send("Hello World");
})



app.use(fourzerofour);

function public_static(staticpath) {


    return function (req, res, next) {
        let filePath = path.join(staticpath, req.path);
        console.log(req.path);
        fs.readFile(filePath, function(err, data) {
            if (!err) {
                res.send(data.toString());
            }
        })
    }
}


app.use('/public', public_static(path.join(__dirname, "folder")));

app.get('/:name',
    function (req, res, next) {
        console.log(req.path);
        req.params.name += " of Delhi";
        next();
    },
    function(req, res) {
        res.send("Hello " + req.params.name)
    }
);

app.listen(3456, function () {
    console.log('Server is connected to http://localhost3456');
});