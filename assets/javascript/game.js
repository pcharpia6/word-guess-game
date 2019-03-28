
function withWords() {
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

    // RNG to pull from array
    var wordArrayRNG = Math.floor((Math.random() * 10) + 0);
    console.log("Random number generator created = " + wordArrayRNG);
    // Verify the wordArray[wordArrayRNG] functions
    var wordProperty = wordArray[wordArrayRNG];
    console.log("Word to guess = " + wordProperty);

    // Set up display array.
        // Create variable with array length
    var arrayLength = wordProperty.length;
    console.log("Expected word length = " + arrayLength);
        // Create array to fill
    var blankArray = [];
        // Fill with appropriate number of blanks
    for (i = 0; i < arrayLength; i++) {
        blankArray.push("_ ");
    };

    console.log("Word line holds: " + blankArray.join(""));
    document.getElementById("word").innerHTML = blankArray.join("");
    // console.log(word[wordArray[wordArrayRNG]].type);
    document.getElementById("clue2").innerHTML = word[wordArray[wordArrayRNG]].type + "<br>" +  word[wordArray[wordArrayRNG]].desc;
    // Begin logic to capture keypress event for guess and store/display.
    document.onkeyup = function(event) {
        var keyPress = event.key.toLowerCase;
        var keyTruth = alphabet.includes(keyPress);
        if (keyTruth === true) {
            var wordSplit = wordProperty.split();
        }
    }
    
}

function displayUp() {
    document.getElementById("clue1").innerHTML = "Clue:";
    document.getElementById("clue2").innerHTML = "";
    document.getElementById("word").innerHTML = "";
    document.getElementById("let-guess").innerHTML = "";
    document.getElementById("guess-rem").innerHTML = "";

    withWords();
}

function startGame() {
    document.getElementById("clue1").innerHTML = "Press any key to begin!"
    document.getElementById("clue2").innerHTML = ""
    document.getElementById("word").innerHTML = "";
    document.getElementById("let-guess").innerHTML = "";
    document.getElementById("guess-rem").innerHTML = "";

    document.onkeyup = function(event) {

        displayUp()



    }

        
}

startGame();


// document.getElementById("clue").innerHTML = "";
