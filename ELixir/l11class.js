/**
 * Created by a.gupta1409 on 02-04-2017.
 */

class Person{
    constructor(first,last,a){
        this.first = first;
        this.last = last;
        let age = a;
        let pvtfullname = null;
    }

    increamentAge(){
        this.age++; // yhaan prthis class hi hai
    }

    getAge(){
        return this.age;
    }

    isEligible(){
        this.increamentAge()
        console.log(this.getAge());
        return this.age;
    }
    get fullname(){
        return this.pvtfullname || (this.first + this.last) ;
    }

    set fullname(name){
        // let obj = name.split(" ");
        // this.first = obj[0];
        // this.last = obj[1] || " ";
        this.pvtfullname = name;
    }

    static statFunc(){
        console.log("static function");
    }

}

class Student extends Person{
    constructor(first,last,age,house){
        super(first,last,age)
        this.house = house;
    }
    // get fullname() {
    //     return super.fullname
    // }
    // set fullname(name){
    //     let obj = name.split(" ");
    //     this.first = obj[0];
    //     this.last = obj[1] || " ";
    // }
}

let p1 = new Person('A','B',20)
let s1 = new Student('Harry','Potter',18,'Gryffindor');
console.log(p1.fullname);