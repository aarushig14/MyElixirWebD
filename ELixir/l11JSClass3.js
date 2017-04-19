/**
 * Created by a.gupta1409 on 02-04-2017.
 */


let a = false;

setTimeout(function () {
    a=true;
},2000)

while(!a){
    console.log('Hello');
}