/**
 * Created by a.gupta1409 on 15-04-2017.
 */


const express = require('express')
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname,"public_static")));

let todo=[];

app.get('/fetchtodos',function (req,res) {
    res.send(todo);
})

app.post('/addtodo',function (req,res) {
    todo.push(req.body.task);
    res.redirect('fetchtodos');
})

app.listen(3456, function () {
    console.log('Server is connected to http://localhost3456');
});