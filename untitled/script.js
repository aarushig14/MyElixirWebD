/**
 * Created by a.gupta1409 on 09-04-2017.
 */

let val = process.argv[2];

let a = 1;
let b = 1;
let n =1;

let startTime = new Date().getTime();
// while(n<=val){
//     if(a==3){
//         if(b==5){
//             console.log("FizzBuzz")
//             b=1;
//         }else{
//             console.log("Fizz")
//             b++;
//         }
//         a=1;
//     }else if(b==5){
//         console.log("Buzz");
//         a++;b=1;
//     }else{
//         console.log(n)
//         a++;
//         b++;
//     }
//     n++;
// }

// for(let i=1;i<=100;i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log("FizzBuzz")
//     }else if(i%5 == 0){
//         console.log("Buzz")
//     }else if(i%3 == 0){
//         console.log("Fizz")
//     }else{
//         console.log(i);
//     }
// }

for(let i=0;i<val;i++){
    var a = i%3 == 0;
    var b = i%5 == 0;

    if(a && b){
        console.log("FizzBuzz");
    }else if(a){
        console.log("Fizz");
    }else if(b){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

console.log((new Date().getTime())-startTime)
