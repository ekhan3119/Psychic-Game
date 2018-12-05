
//declare computer vaariable choices.
var ComputerGuesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var correctGuess = ComputerGuesses[Math.floor(Math.random() * ComputerGuesses.length)];

//variables that holds wins, losses, guesses left, gusses so far. Starts at 0.
var win= 0;
var losses= 0;
var guessesLeft= 9;

//variable holds the letters gussed by the user and holds 9 guessed then reset to 0.
var guessesSoFar=[];
var lettermatch = /^[a-z]$/;


//Create variables that holds references to the id in the html where you want to display things.
var GuessLettertext = document.getElementById("Guess-Letter-text");
var Winstext = document.getElementById("Wins-text");
var Lossestext = document.getElementById("Losses-text");
var GuessesLefttext = document.getElementById("GuessesLeft-text");
var GuessesSoFartext = document.getElementById("GuessesSoFar-text");

// This function will run when a key is pressed.
document.onkeyup = function(event){
    var userChoice = event.key.toLowerCase();
    if (guessesLeft > 0) {
        
        // if gusses left the user can guess.
        
        if (correctGuess === userChoice && lettermatch.test(userChoice)) {
            win++;
            Winstext.textContent = "Wins: "+ win;
            reset();
        }
        
        else if(correctGuess!== userChoice && lettermatch.test(userChoice)) {
            guessesLeft--;
            GuessesLefttext.textContent = "Gussesleft: "+ guessesLeft;
            GuessesSoFartext.append(userChoice + " ");
        }
        else //not a letter
        {

            alert("Pick a letter!");

        }
    }
    // the there is no gusses left the user will start over the game. ALso if loose the losses with add 1. 
    else{
        losses++;
        Lossestext.textContent = "Losses: "+ losses;
        reset();
    } ;
        
};
    function reset(){
        guessesLeft = 9;
        GuessesLefttext.textContent = "Gussesleft: "+ guessesLeft;
        GuessesSoFartext.textContent = "Your guesses so far: ";
        correctGuess = ComputerGuesses[Math.floor(Math.random() * ComputerGuesses.length)];
    };
  