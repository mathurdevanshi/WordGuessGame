/////////////////////////ARRAYS/////////////////////////
var wordBank=[
    'Baked Potatoes',
    'Hash Browns',
    'Mashed Potatoes',
    'Potato Pancakes',
    'Potato au Gratin',
    'French Fries',
    'Scalloped Potatoes',
    'Twice Baked Potatoes'
];
var doubleLetter=[
    'a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y','z'
];
var choosenWordLetters=[];
var playerArray=[];
var wrongLetters=[];


/////////////////////////VARIABLES/////////////////////////
var choosenWord="";
var blanks=0;
var winCount=0;
var loseCount=0;
var guessesLeft=10;
var rightGuess=0;
var letterGuessed="";

/////////////////////////FUNCTIONS/////////////////////////
//--------------------------------------------------------resettingGame
function resettingGame(){
    //getting a new word saved
    var randomNumber=parseInt(Math.random()*wordBank.length);
    choosenWord=wordBank[randomNumber];
    choosenWordLetters=choosenWord.split('');
    blanks=choosenWordLetters.length;
    //resetting the variable values
    letterGuessed=0;
    rightGuess=0;
    guessesLeft =10;
    wrongLetters=[];
    playerArray=[];
    doubleLetter=['a','b','c',
        'd','e','f',
        'g','h','i',
        'j','k','l',
        'm','n','o',
        'p','q','r',
        's','t','u',
        'v','w','x',
        'y','z'
        ];
    test=false;
    startGame();
}
//--------------------------------------------------------startingGame
function startGame(){
    //getting a new word saved
    var randomNumber=parseInt(Math.random()*wordBank.length);
    choosenWord=wordBank[randomNumber];
        console.log('startGame-choosenWord', choosenWord);
    choosenWordLetters=choosenWord.split('');
        console.log('startGame-choosenWordLetters', choosenWordLetters);
    blanks=choosenWordLetters.length;
        console.log('startGame-blanks', blanks);
    //resetting the variable values
    rightGuess=0;
    guessesLeft =10;
    wrongLetters=[];
    playerArray=[];
    doubleLetter=['a','b','c',
        'd','e','f',
        'g','h','i',
        'j','k','l',
        'm','n','o',
        'p','q','r',
        's','t','u',
        'v','w','x',
        'y','z'
        ];
    //creating blanks
    for(var i=0; i<blanks; i++){
        playerArray.push('_');
        document.getElementById('chosenWord').innerHTML=playerArray;
    }
        console.log('startGame-playerArray', choosenWordLetters);
    //making adjustments on the screen 
    document.getElementById('chosenWord').innerHTML = playerArray.join(' ');
	document.getElementById('numberGuesses').innerHTML = guessesLeft;
	document.getElementById('totalWins').innerHTML = winCount;
	document.getElementById('totalWrongGuesses').innerHTML = loseCount;
    document.getElementById('wrongGuess').innerHTML = wrongLetters;
    //document.getElementById('totalWrongGuess').innerHTML=wrongLetters;
}
//--------------------------------------------------------compareLetters
function compareLetters(letterGuessed){
    if(choosenWord.indexOf(letterGuessed)>-1){
        for(var i=0; i<blanks; i++){
            if(choosenWordLetters[i] === letterGuessed)
                {rightGuess++;
                playerArray[i] = letterGuessed;
                document.getElementById('chosenWord').innerHTML=playerArray.join(' ');
                }
            }
        }  
    else{
        wrongLetters.push(letterGuessed);
        guessesLeft--;
        document.getElementById('numberGuesses').innerHTML=guessesLeft;
        document.getElementById('wrongGuesses').innerHTML=wrongLetters;
        console.log('Wrong Letters=' + wrongLetters);
        console.log('Guesses left are'+guessesLeft);
    }
}
//--------------------------------------------------------WinLose
function winLose(){
    if(rightGuess === blanks){
        winCount++;
        document.getElementById('numberGuesses').innerHTML=winCount;
        document.getElementById('displayAnswer').innerHTML=choosenWord;
        resettingGame();
    }
    else if (guessesLeft===0){
        loseCount++;
        document.getElementById('totalWrongGuesses').innerHTML=loseCount;
        alert('Let us try another word');
        resettingGame();
    }
}

/////////////////////////THE STARTING LINE - CALLING ALL THE FUNCTIONS IN ORDER/////////////////////////
console.log('starting at correct spot');
startGame();
document.onkeyup=function(event){
    test=true;
    letterGuessed=event.key;
    for(var i=0; i< doubleLetter.length; i++){
        if(letterGuessed === doubleLetter[i] && test === true){
            compareLetters(letterGuessed);
            winLose();
        }
    }
}