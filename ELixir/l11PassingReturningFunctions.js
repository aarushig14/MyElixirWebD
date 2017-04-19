/**
 * Created by a.gupta1409 on 02-04-2017.
 */

//  function hello(){
//      console.log('Hello World')
// }
//
// console.log("start")
// // setTimeout(hello,3000);
// // let helloid = setInterval(hello,1000);
//
// let helloid = setInterval(hello,1000)
//
// setTimeout(function(){
//      clearInterval(helloid);
//  },6000)

function addFuncGen(value,operator){
    console.log(value + "creating add");
     function add(operand){
         console.log(value + "before return op+val");
         return operand + value ;
     }
     console.log(value + "before return add");
     return add;
}

let twoadder = addFuncGen(2);
let threeadder = addFuncGen(3);