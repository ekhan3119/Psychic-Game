console.log("hi")
//List of Gussing letters
var GuessLetter="";

//variables that holds wins, losses, guesses left, gusses so far. Starts at 0.
var win= 0;
var losses=0;
var guessesLeft=0;

//variable holds the letters gussed by the user and holds 9 guessed then reset to 0.
var guessesSoFar=[];


//Create variables that holds references to the id in the html where you want to display things.
var GuessLettertext = document.getElementById("Guess-Letter-text");
var Winstext = document.getElementById("Wins-text");
var Lossestext = document.getElementById("Losses-text");
var GussesLefttext = document.getElementById("GuessesLeft-text");
var GussesSoFartext = document.getElementById("GuessesSoFar-text");




