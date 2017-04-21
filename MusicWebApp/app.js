/**
 * Created by a.gupta1409 on 20-04-2017.
 */

var express = require('express');
var fs = require('fs');

var app = express();

app.use('/public',express.static(__dirname + '/public_static'));

app.get('/',function (req,res) {
    return res.redirect('/public_static/home.html');
})

app.get('/music', function(req,res){

    var fileId = req.query.id;
    var file = __dirname + '/music/' + fileId;
    fs.exists(file,function(exists){
        if(exists)
        {
            var rstream = fs.createReadStream(file);
            rstream.pipe(res);
        }
        else
        {
            res.send("Its a 404");
            res.end();
        }

    });
});

app.get('/download', function(req,res){
    var fileId = req.query.id;
    var file = __dirname + '/music/' + fileId;
    fs.exists(file,function(exists){
        if(exists)
        {
            res.setHeader('Content-disposition', 'attachment; filename=' + fileId);
            res.setHeader('Content-Type', 'application/audio/mpeg3')
            var rstream = fs.createReadStream(file);
            rstream.pipe(res);
        }
        else
        {
            res.send("Its a 404");
            res.end();
        }
    });
});


app.listen(3003,function () {
    console.log('Port 3003 has starred');
})
