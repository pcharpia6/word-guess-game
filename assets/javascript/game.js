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


// Create reference array to pull property names - for hint
var wordArray = ["dwarfs", "knight", "elves", "mage", "skaven", "greenskins", "vampires", "axe", "sword", "mace", "cavalry"];

// Random number generator for word choice
var wordArrayRNG = Math.floor((Math.random() * 10) + 0);

console.log(wordArrayRNG);

// Verify the wordArray[wordArrayRNG] functions
var wordProperty = wordArray[wordArrayRNG];

console.log(wordProperty);

console.log(word[wordArray[wordArrayRNG]].type, word[wordArray[wordArrayRNG]].desc);

document.getElementById("clue").innerHTML = "";
document.getElementById("word").innerHTML = "";
document.getElementById("let-guess").innerHTML = "";
document.getElementById("guess-rem").innerHTML = "";