var wins = 0;
var losses = 0;
var numGuess = 9;

var compGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Determines which key was pressed. Will start the game.
document.onkeyup = function newGame(anyKey) {
        $("win").text("");
        let guesses = 9;
        
        let secretLetter = compGuess[Math.floor(Math.random() * compGuess.length)];

   

    // letters guessed array
    let lettersGuessed = [];
    
    

    document.onkeyup = function (e) {
        let guess = e.key;


        // push guess into lettersGuessed[]
        lettersGuessed.push(String(guess.toLowerCase()));

        // use lettersFound === currentWordArray.length as win condition
        let lettersFound = 0;


        // check for correct guess. iterate either letters found or guesses.
        for (let i = 0; i < secretLetter.length; i++) {
            if (secretLetter[i].charAt(0) === guess) {
                lettersFound++;
            };
        };

        // console feedback. change to alert or html at some point
        if (lettersFound > 0) {
            
            guess.length = 0;
            // document.location.reload();
            wins++;
            newGame();
            alert("You win!");

        } else {
            guesses--;
        };
        // console.log('current guesses: ' + lettersGuessed.toLocaleString());

        if (guesses < 1) { //game over and reset. change from alert to high z-index html 
           
            // document.location.reload();
            losses++;
            newGame();
            alert("YOU LOSE!");
        }
        
         

        // $(document).ready(function () {
        //     $('#but').click(newGame);
        // });
        //adds guesses to HTML
        $('#guessesMade').text('Your Guesses so far:' + ' ' + lettersGuessed + ', ');
        $('.wins').text('Wins:' + ' ' + wins);
        $('.losses').text('Losses:' + ' ' + losses);
        $('.guesses-remaining').text('Guesses Remaining:' + ' ' + guesses);

    };
};