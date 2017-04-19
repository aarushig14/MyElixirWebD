/**
 * Created by a.gupta1409 on 09-04-2017.
 */

const express = require('express');

const app = express();

app.get('/',function (req,res) {
    console.log(req);
    res.send("<h1>Hello World</h1>")        // status : by default 304 :  not modified
})

app.get('/hello',function(req,res){
    res.send(200);
})

app.get('/hello/asd',function(req,res){
    res.status(200);
    res.send("some response");
})

app.post('/hello',function (req,res) {
    res.send("Response from post");
})

app.get('/student',function (req,res) {
    res.send("Student Details " + req.query.id[0] +" "+ req.query.name );
    //

    //res.send("Student Details " + req.query.id +" "+ req.query.name );
    //localhost:3434/student?id=7&id=6&name=aarushi
    //{ id: [ '7', '6' ], name: 'aarushi' }
    //Student Details 7,6 aarushi

    console.log(req.query)
})

//make the server run make the server listen

app.listen(3434,function () {
    console.log("server is started on http://localhost:8888");
})
app.listen(5555);
