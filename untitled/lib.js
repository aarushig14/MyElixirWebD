/**
 * Created by a.gupta1409 on 09-04-2017.
 */

// console.log("lib code executed")
//
// console.log(this);
// // global variables  executed but not available in main.js until global
//
// console.log(this == global); //this global nhi hai
//
// var a = 10;
// global.b = 20;
//
// var fun = function () {
//     console.log('fun');
// }
//
// function fun1() {
//     console.log('fun')
// }
// console.log(this == global);
;
var a=10;
var b=20;
c=30
module.exports={
    a,b,
    fizzbuzz : function() {
        let a = 1;
        let b = 1;
        let n = 1;
        let val = process.argv[2];

        while (n <= val) {
            if (a == 3) {
                if (b == 5) {
                    console.log("FizzBuzz")
                    b = 1;
                } else {
                    console.log("Fizz")
                    b++;
                }
                a = 1;
            } else if (b == 5) {
                console.log("Buzz");
                a++;
                b = 1;
            } else {
                console.log(n)
                a++;
                b++;
            }
            n++;
        }
    }
}

console.log(a);
console.log(global.c);