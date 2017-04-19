/**
 * Created by a.gupta1409 on 09-04-2017.
 */
//
// if(process.argv.length >2) {
//     var avg = process.argv.slice(2);
// }else{
//     console.log(0);
// }
//
// console.log(avg)
//
// var a = avg.reduce(function (acc,val,index, array) {
//         acc = parseInt(acc);
//         val = parseInt(val);
//         return ((acc*index)+val)/(index+1)
//
// });
//
// if(a != 0){
//     console.log(a);
//
// }else{
//     console.log("no value")
// }
function usingNumber(a) {//32       //37
    a = Number(a);
}
function usingParseInt(a) {//31     //47
    a = parseInt(a);
}

function usingUrinary(a) {//17      //37
    a = +a
}

function usingDivide(a) {//31       //37
    a = a/1
}

function usingMultiply(a) {  //21       //31
    a = (a*1)
}

function usingNewNumber(a) {//15        //37
    a = (new Number(a))
}

//+
// 1*
// parseInt
// Number
// new Number()

let startTime= new Date().getTime();

for(let i=1;i<100000;i++){
    usingDivide(""+i);
}
console.log((new Date().getTime())-startTime);


