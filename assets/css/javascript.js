var computerChoices = ["bonfire", "swimming", "hiking"];

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

function startover(){
  
    userProgress = [];
    userGuesses = 10;
    answerIndex= Math.floor((Math.random() * computerChoices.length));
    // use the new index to pick a word
    word = computerChoices[answerIndex];
    // one step further, choosing the actual letters (array)
    wordArray = word.split("");
    for(let i = 0; i < wordArray.length; i++){
        userProgress.push("_");
    }
}

// draw inital dashes on screen
render();

function render(){
    document.getElementById("userprogress").textContent = userProgress.join(" ");
    $("#numwins").text(userWins);
    console.log("this is userguesses:" + userGuesses);
    $("#numguesses").text(userGuesses);
}

console.log(wordArray);

console.log(computerChoices[answerIndex]);

//START GAME

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();
    console.log(userInput);

    isMatchFound = false;
    //this loops thru the letters in the current word to be guessed and switches a dash with user input if it matches
    for(let j = 0; j < wordArray.length; j++){
        
        if(userInput === wordArray[j]){
            userProgress[j] = wordArray[j];
        
            if (userProgress.join("") == wordArray.join("")){
               alert("You Win! Correct answer: " + userProgress.join("")); //why does it pop up before the last letter is shown?
               startover()
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
            alert("Game Over!")
        }
    }
    console.log(userProgress);
    render();
}






