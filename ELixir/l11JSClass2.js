/**
 * Created by a.gupta1409 on 02-04-2017.
 */


const DEFAULT_AGE = 10;

function person(name,age){
    this.name = name;
    this.age = age || DEFAULT_AGE || 9; // will convert to boolean if they are reduceable to boolean
}

var p1 = new person("HArry",20);
var p2 = new person("ginny");


function fun1(anotherFunction){
    console.log('fun 1');
    if(typeof anotherFunction === "function")
    anotherFunction();
}

function fun2(){
    console.log('fun 2');
}

fun1(fun2);