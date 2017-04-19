/**
 * Created by a.gupta1409 on 02-04-2017.
 */

var fun1 = function(){
    
}

function fun2(){
    
}

const units = "cm";

//overloading of function
function area(unit,i1,i2){

    let squnits = 'sq.' + units;
    if(typeof unit === "string"){
        squnits = 'sq.' + unit;
    }else{
        i2 = i1;
        i1 = unit;
    }

    if(i2==undefined){
        return i1*i1 +  squnits;
    }

    return i1,i2 + squnits;
}


console.log(area(3))
console.log(area(4,3))
console.log(area('m',20))