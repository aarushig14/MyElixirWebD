/**
 * Created by a.gupta1409 on 02-04-2017.
 */

let arr=[1,7,134,68,11]

arr.sort((a,b) => b-a ) // arrow syntax

var myfunc = function(var1,var2){
    return var1 + (10*var2)
}
var myfunc2 = (var1,var2) => var1 + (10*var2);

var myfun = (var1,var2) => {
    //do anything
    return vr1 +var2;
}

//drawback  : here 'this' refers where arrow function is defined;

arr.sort(function(a,b){
    console.log(a)
    console.log(b)
    //insertion sort ulta
    //divide and rule nhi coz no threads
    return b-a ;            //make it positive where you want the numbers to be swapped
})

let sqrtarr = arr.map((item) => Math.sqrt(item))    //jbrdsti encapsulate func within func
let sqrt = arr.map(Math.sqrt)   // function hi Math.sqrt pass kr diya

var a = [1,2,3,4,5];
// let mean = a.reduce(function(accumulator,item,index){
//     accumulator = (accumulator*(index) + item)/(index+1);
//     return accumulator;
// })

let mean = a.reduce((accumulator,item,index) => (accumulator*(index) + item)/(index+1));