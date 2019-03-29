// alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Words to guess and hints.
var word = {
    "dwarfs" : {
        type: "Race.", 
        desc: "Short, enjoys mining."
    },
    "knight" : {
        type: "Soldier.", 
        desc: "Follows code of chilvary. Wears heavy armor."
    },
    "elves" : {
        type: "Race.", 
        desc: "Tall and lean. Pointy ears."
    },
    "mage" : {
        type: "Soldier.", 
        desc: "Performs magic."
    },
    "skaven" : {
        type: "Race.",
        desc: "Small and rat-like."
    },
    "greenskins" : {
        type: "Race.",
        desc: "Burly and pugnacious. Think orc."
    },
    "vampires" : {
        type: "Race.",
        desc: "Likes blood. May or may not have died at some point."
    },
    "axe" : {
        type: "Weapon.", 
        desc: "Sharp and choppy."
    },
    "sword" : {
        type: "Weapon.",
        desc: "Long and pointy. Stabby and slashy."
    },
    "mace" : {
        type: "Weapon.",
        desc: "Blunt and heavy. Smashy like a hammer."},
    "cavalry" : {
        type: "Soldier.",
        desc: "Rides a steed."},
    };

var wordArray = ["dwarfs", "knight", "elves", "mage", "skaven", "greenskins", "vampires", "axe", "sword", "mace", "cavalry"];

var guessArray = [];
var wordArrayRNG = "";
var wordProperty = "";
var arrayLength = "";
var blankArray = []; // initial blanks, fill with answers
var keyPress = "";
var keyTruth = "";
var wordSplit = []; // array of word letters
var truth = "";
var guessRemain = 8;

function reset() {
    guessArray = [];
    wordArrayRNG = "";
    wordProperty = "";
    arrayLength = "";
    blankArray = []; // initial blanks, fill with answers
    keyPress = "";
    keyTruth = "";
    wordSplit = []; // array of word letters
    truth = false;
    startGame();
}

function chooseWord() {
    // RNG to pull from array
    wordArrayRNG = Math.floor((Math.random() * 10) + 0);
    console.log("Random number generator created = " + wordArrayRNG);
    // Verify the wordArray[wordArrayRNG] functions
    wordProperty = wordArray[wordArrayRNG];
    console.log("Word to guess = " + wordProperty);
}

function mkDisplay() {
    // Set up display array.
        // Create variable with array length
    arrayLength = wordProperty.length;
    console.log("Expected word length = " + arrayLength);
        // Create array to fill
    blankArray = [];
        // Fill with appropriate number of blanks
    for (i = 0; i < arrayLength; i++) {
        blankArray.push("_ ");
    };

    console.log("Word line holds: " + blankArray.join(""));
    document.getElementById("word").innerHTML = blankArray.join("");
    // console.log(word[wordArray[wordArrayRNG]].type);
    document.getElementById("clue2").innerHTML = word[wordArray[wordArrayRNG]].type + "<br>" +  word[wordArray[wordArrayRNG]].desc;
}

function displayUp() {
    document.getElementById("clue1").innerHTML = "Clue:";
    document.getElementById("clue2").innerHTML = "";
    document.getElementById("word").innerHTML = "";
    document.getElementById("let-guess1").innerHTML = "Letters Guessed:";
    document.getElementById("let-guess2").innerHTML = "";
    document.getElementById("guess-rem1").innerHTML = "Attempts Remaining";
    document.getElementById("guess-rem2").innerHTML = guessRemain;
    document.getElementById("try-again").innerHTML = "";
    chooseWord();
    mkDisplay();
    document.onkeyup = function(event) {
        logKey();
        chkKey();
    }
}

function startGame() {
    document.getElementById("clue1").innerHTML = "Press any key to begin!";
    document.getElementById("clue2").innerHTML = "";
    document.getElementById("word").innerHTML = "";
    document.getElementById("let-guess1").innerHTML = "";
    document.getElementById("let-guess2").innerHTML = "";
    document.getElementById("guess-rem1").innerHTML = "";
    document.getElementById("guess-rem2").innerHTML = "";
    document.getElementById("try-again").innerHTML = "";

    document.onkeyup = function(event) {
        displayUp();
        console.log("activate displayUp()");
    }        
}

function logKey() {
    console.log("logKey")
    // Begin logic to capture keypress event for guess and store/display.
    console.log(event.key);
    keyPress = event.key.toLowerCase();
    // is the input a letter in the alphabet?
    keyTruth = alphabet.includes(keyPress);
    console.log(keyTruth);
}

function chkKey() {
    console.log("chkKey");
    if (keyTruth === true) {
        wordSplit = wordProperty.split("");
        console.log(wordProperty);
        console.log("word split contains: " + wordSplit);
        if (wordSplit.includes(keyPress)) {
            actKeyYes() 
        }
        else {
            actKeyNo()
        }
    }
}

function actKeyYes() {
    // insert the chosen letter into the correct place in the blankArray
    console.log("actKeyYes");
    for (var i = 0; i < wordSplit.length; i++)  {
        if (wordSplit[i] == keyPress) {
            blankArray[i] = keyPress;
            console.log("blank array conains: " + blankArray);
            document.getElementById("word").innerHTML = blankArray.join("");
        }
    }
    if (guessArray.includes(keyPress)) {}

    else {
    guessArray.push(keyPress);
    document.getElementById("let-guess2").innerHTML = guessArray;
    }

    if (blankArray.join("") == wordSplit.join("")) {
        alert("You win!");
        reset();
    }    
}   

function actKeyNo() {
    console.log("actKeyNo");
    if (guessArray.includes(keyPress)) {
        document.getElementById("try-again").innerHTML = "Guess again!";
    }

    else {
        guessArray.push(keyPress);
        document.getElementById("let-guess2").innerHTML = guessArray;
        document.getElementById("try-again").innerHTML = "Guess again!";
        guessRemain--;
        document.getElementById("guess-rem2").innerHTML = guessRemain;
        if (guessRemain == 0) {
            alert("You Lose! The correct answer was " + wordSplit.join("") + ".");
            reset();
        }
    }

}
        
startGame();
