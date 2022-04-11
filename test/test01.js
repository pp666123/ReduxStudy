function sayHello() {

    return function () {
        return "Hello world!"
    }

}



let fn = sayHello();
console.log(typeof(fn)); //function
console.log(fn()); //Hello world!

let message = fn();

console.log(typeof(message)); //string
console.log(message) //Hello world!


