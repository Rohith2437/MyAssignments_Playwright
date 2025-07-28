//type of functions

//Named function

function funname(a,b){
    return a+b;
}
console.log(funname(10,29))

//Anonymous function

let x=10;
let y =function(){
    console.log("this is anonymous function")
}
y()

//arrow function
let funName3 = () => { //fat arrow replace the function keyword
console.log("this is anonymous function")
}
funName3()

//single arrow function

let funName4 = (c,d) =>c*d;

console.log(funName4(10,20))

setTimeout(() => {
  console.log("Hello, world!");
}, 2000); // Executes after 2 seconds

