var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var lettersGuessed = [];
// computer choices for random secretLetter varible
var compGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//  Will start the game.
document.onkeyup = function newGame(anykey) {
       
    
    var secretLetter = compGuess[Math.floor(Math.random() * compGuess.length)];
   

    var lettersFound = 0;
// User input for guesses
    document.onkeyup = function (e) {
        let guess = e.key;

       
    // letters guessed array
    var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
   for (let i = 0; i < secretLetter.length; i++) {
       if (secretLetter[i].charAt(0) === guess) {
            lettersFound++;
        }
    }// keeps random letter choice from changing on keyup

    if (choices.indexOf(guess) > -1) {
        // win directions
        if (lettersFound > 0) { 
            wins++;
            guessesRemaining = 9;
            lettersGuessed = [];
            newGame(); //calls for a new random letter
        }

        else {
            guessesRemaining--;
            lettersGuessed.push(guess);
        }
       
       // loss directions
        if (guessesRemaining === 0) { 
           losses++;
           guessesRemaining = 9;
           lettersGuessed = [];
           newGame(); //calls for a new random letter
           
        }
    }

    
    //adds guesses to HTML
    $('#guessesMade').text('Your Guesses so far: ' + lettersGuessed);
    $('.wins').text('Wins:' + ' ' + wins);
    $('.losses').text('Losses:' + ' ' + losses);
    $('.guesses-remaining').text('Guesses Remaining:' + ' ' + guessesRemaining);
    // console.log(lettersGuessed);
    // console.log(secretLetter);
    }
};
