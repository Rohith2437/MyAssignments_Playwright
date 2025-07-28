//callback function

function checkavailability(movieName, playmovie){

console.log("movie name "+movieName+" is being played")

playmovie() //callback parameter is not used so simply using it here

//moviename parameter is used
}

function playmovie(){
    console.log("in screen number 12")
}

checkavailability("Mersal",playmovie )


//EXAMPLE 2
function checkavailability1(movieName1){

console.log("movie name "+movieName1+" is being played")


}

function playmovie1(){
    console.log("in screen number 13")
}

checkavailability("Spider-Man",playmovie1 )