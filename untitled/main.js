/**
 * Created by a.gupta1409 on 09-04-2017.
 */

//require kri hui library ko execute krne se global me nhi aa rha
// this.somevar = 10;
// global.b = 20;
// var b=23;
// require("./lib");
//
// console.log('Main code executed');
// console.log(b)
//
// console.log(this);      // not global but empty object

// console.log(fun)
// console.log(fun1)


var main = require('./lib');
main.fizzbuzz();

const person = require('./Person')
let p = person('Aarushi',20);

