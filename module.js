//when using "type": "module" in .json
export function hello() {
    console.log("hello");
}
export function bye() {
    console.log("bye");
}
export function MyModule() {
    this.night = () => {
        console.log("night!");
    }
    this.morning = () => {
        console.log("morning!");
    }
}
export class User { // adding default after export means User can be imported outside of curly braces in file which you import module
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getDetails(){
        return `
        Name: ${this.name},
        Age: ${this.age},
        Email: ${this.email},
        `
    }
}
export class Maths {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    Operations(){
        return `
        Addition: ${this.a + this.b}
        Subtraction: ${this.a - this.b}
        Multiplication: ${this.a * this.b}
        Division: ${this.a / this.b}
        Remainder: ${this.a % this.b}
        `
    }
}

/*
function bye() {
    console.log("bye");
}

exports.bye = bye; // when using commonjs in .json
*/