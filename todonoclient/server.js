/**
 * Created by a.gupta1409 on 16-04-2017.
 */

const express = require('express')
const app = express();
const bodyparsr = require("body-parser")

app.use(bodyparsr.json())
app.use(bodyparsr.urlencoded({extended:true}))

app.set("view engine","hbs");

let todos =[];

app.get('/',(req,res)=>{res.render('main',{todos:todos})});

app.post('/addtodo',(req,res)=>{
    todos.push(req.body.newtodo);
    console.log(todos);
    res.redirect('/')
    }
)

app.listen(4444,function(){
    console.log("server 4444 active");
});