

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

let students = [
    {id:5,name:'John'},
    {id:6,name:'Harry'}
]

app.get('/list',function (req,res) {
    res.send(JSON.stringify(students));
})

app.get('/add',function (req,res) {
    students.push({
        name:req.query.name,
        id:req.query.id
    })
    res.redirect('/list')
})

app.post('/add',function (req,res) {
    students.push({
        name: req.body.name,
        id: req.body.id
    })
    res.redirect('/list');
})

app.listen(8888,function(){
    console.log("server started on http://localhost:8888");
});





