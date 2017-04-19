/**
 * Created by a.gupta1409 on 02-04-2017.
 */

//due to function hoisting will work but not in classes
let p3 = new person('John','Doe',22);

//display is public function and printName and printAge are private
function person(first,last,age) {
    this.first = first;
    this.last =last;
    let AgeP = age;
    this.display = function(){
       this.pn = printName(this.first,this.last);
       this.pa = printAge(AgeP);
       console.log(this.pn() +" " + this.pa());
    }

    function increamentAge(age){
        age++;

        // this.age++           ye vaala this window ka hai coz call window se hua

        // function inc(){
        //     age++;
        //     return age;
        // }
        // return inc;
    }

    this.isEligible = function(){
        // AgeP = increamentAge(AgeP)();
        increamentAge();
        if(AgeP > 18){
            return true;
        }
    }

    this.getAge = function () {
        return age;
    }

    function printName(first,last){
        function print(){
            return (first + " " + last);
        }
        return print;
    }
    function printAge(age) {
     function printA() {
         return age;
     }
     return printA;
    }
}

person.staticFun = function(){
    console.log("static");
}

person.prototype.fullName = function(){
    return this.first + " " + this.last;
};


