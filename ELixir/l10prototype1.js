/**
 * Created by a.gupta1409 on 01-04-2017.
 */

function person(age,name = age) {     //set default value of parameters
    this.age = age;
    this.name = name;
}

var p1 = new person();
var p2 = {age:11,name:"pakhi"}
console.log(p1.__proto__);
//p1 and p2 are same just creating p1 is similar to oops

function fruit(){
    this.name = "apple";
    this.color = "red";
    this.qty = 4;
    // this.getQty = function(){
    //     return this.qty;
    // }
}

fruit.prototype.getQty == function (){
    return this.qty;
}

function addQty(fun){
    fun.qty++;
}

function getCost(fun){
    return fun.costpkg*getQty(fun.frt);
}

function apple(){
    this.frt = new fruit();
    this.costpkg = 20;
}

var p3 = new person();
p3.age=p2.age;
