function userprofile(name){
    console.log("hello " +name)
}

userprofile("Venkat")

let double = (a) => { 
    let value=a*2
console.log("output is " +value)
}
double(9)

let y =function(){
    setTimeout(() => {
  console.log("printed after 2 seconds");
}, 2000); 
}
y()

function getuserdata(weldata){

       setTimeout(() => {
  console.log("getuserdata");
  weldata();
}, 3000); 

}

function logmessage(){
  console.log("callback function invoked after 3 seconds");
}


getuserdata(logmessage)

///////////////////

