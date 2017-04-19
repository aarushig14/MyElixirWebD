/**
 * Created by a.gupta1409 on 02-04-2017.
 */

let a = false;

function printhello() {
    if(!a){
        console.log('Hello');
    }
}

let helloId = setInterval(printhello,347);
setTimeout(function () {
    a=true;
},6000)