var inputbox = document.getElementById("inputbox")
var Result = document.getElementById("Result")
var Guesscount = document.getElementById("Guesscount")
var noofguess = 3

var randomnumber = Math.floor(Math.random()*10)+1
function checkthenumber(guessednumber)
{
    if(inputbox.value == randomnumber)
    {
        alert("You guessed right,congratulations.")
        Result.textContent = "You are Right !"
    }

    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You lost,Generated random number is:" +randomnumber)
        }
        Guesscount.textContent = "Available Guesses:"+noofguess
        Result.textContent = "You are Wrong !"
    }
}


