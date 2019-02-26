//starter//

let computerChoices = ["bonfire", "swimming", "hiking"];

let answerIndex = Math.floor((Math.random() * computerChoices.length));
console.log(answerIndex);

let word = computerChoices[answerIndex];

let wordArray = word.split("");

let userGuesses = 10; 

let userWins = 0;

let isMatchFound = false;

//initial loop to place all dashes to start game
var userProgress = [];
for(let i = 0; i < wordArray.length; i++){
    userProgress.push("_");
}
// draw inital dashes on screen
render();

//this draws the variables and word to the screen
function render(){
    document.getElementById("userprogress").textContent = userProgress.join(" ");
    $("#numwins").text(userWins);
    console.log("this is userguesses:" + userGuesses);
    $("#numguesses").text(userGuesses);
}

console.log(wordArray);

console.log(computerChoices[answerIndex]);

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();
    console.log(userInput);

    tuisMatchFound = false;
    //this loops thru the letters in the current word to be guessed and switches a dash with user input if it matches
    for(let j = 0; j < wordArray.length; j++){
        if(userInput === wordArray[j]){
            userProgress[j] = wordArray[j];
        
            if (userProgress.join("") == wordArray.join("")){
               // alert("you have won!");
               userWins++;
            }
            console.log(userProgress.join(""));
            console.log(wordArray.join(""));
            isMatchFound = true;
        }
    }
    if  ((isMatchFound == false) && (userGuesses >0)) {
        userGuesses--;
        if (userGuesses == 0){
            alert("Game over!")
        }
    }
    console.log(userProgress);
    render();
}

//my next goal:
// reduce numgusses - 1 every time a letter is guessed wrong (done)

//goal after that: update wins variables when word is completed

    //function render(){
        // if (userInput ==! computerChoices[answerIndex] {
        //     let guessesLeft = (userGuesses -1)
        // }

        // document.getElementById("#numguesses").innerHTML = (value.guessesLeft);


        // if (userInput === computerChoices[answerIndex] && guessesLeft > 0);
        //     userWins +1

            
        //     document.getElementById("#numwins").innerHTML(value.userWins)

        // initializeGame ();
    //}



 
// when word is guessed OR 10 guesses are up, refresh and restart counter//

// if word is guessed before counter reaches 10, add +1 to win, restart word //

   //var userGuesses = 10; 

    //document.onkeyup = function()
        //let UserInput = event.key()

        //does this match something in wordarray computer choice, true false, if its false, then response to that by subtracting


        //if(userGuesses >  0; userGuesses -1) 

        //document.write 

        //else //reset counter, reset word for computerChoice loop back to top of code?
            
       // }
        //run word array, choose new word 

    //}






