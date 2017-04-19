/**
 * Created by a.gupta1409 on 01-04-2017.
 */


const obj = {a:10,b:11}
let a= 30;

function fun() {
    var b=10;
    let a = 10;     //scope down't go in inner block
    if(true){
        console.log(a);     // hoisting ki vjh se let a pehle read ho gya to isliye undefined an dfir usko use nhi kr skte;
        let a =11;        // on commenting let a to console.log(a) immediate bahar vaale let a k liye chal jaata
        var b= 21;  //var ignored since already in global scope
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

