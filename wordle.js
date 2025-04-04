const wordList = [
    "APPLE", "BANJO", "CHESS", "DRIVE", "EAGER",
    "FAITH", "GLORY", "HONEY", "IRONY", "JOKER",
    "KNIFE", "LUNCH", "MANGO", "NIGHT", "OCEAN",
    "PAINT", "QUERY", "RIVER", "SUGAR", "TANGO",
    "UNIFY", "VIVID", "WAGON", "XENON", "YEAST",
    "ZEBRA", "ALBUM", "BRAVE", "CRISP", "DEALT",
    "EARTH", "FLEET", "GRAND", "HURRY", "INPUT",
    "JUMPY", "KNEEL", "LEMON", "MIGHT", "NOISE",
    "OPERA", "PLUMB", "QUEST", "RANCH", "SHINE",
    "TRACE", "UNDER", "VALUE", "WEARY", "XERIC",
    "YOUTH", "ZONAL", "ACORN", "BEACH", "CRANE",
    "DEPTH", "ELOPE", "FLUID", "GROVE", "HATCH",
    "INDEX", "JAZZY", "KNOCK", "LEASH", "MINOR",
    "NEVER", "OZONE", "PLUME", "QUILT", "REACT",
    "SCENE", "TIMER", "UPPER", "VAULT", "WIDER",
    "XENIA", "YUMMY", "ZONED", "ABOUT", "AFTER",
    "AGENT", "AGILE", "ANGER", "ARROW", "BIRTH",
    "BOARD", "BRICK", "BROIL", "CANDY", "CLEAR",
    "CLOSE", "CLOUD", "COUNT", "COVER", "CREST"
];

let wordleArray = [11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55,61,62,63,64,65];



const wordleWordIndex = Math.floor(Math.random() * (100 + 1));
const wordleWord = wordList[wordleWordIndex];
console.log(wordleWord);

let inputWordle = document.getElementById("wordleInput");

inputWordle.addEventListener('input', () => {
    inputWordle.value = inputWordle.value.toUpperCase();
});

inputWordle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitGuess();
    }
});


function submitGuess() {
    event.preventDefault();
    inputWordle.value.toString();
    console.log(inputWordle.value);
    if (inputWordle.value.length < 5) {
       return alert("Guess must have at least 5 letters.");
    }
    if (!isOnlyLetters(inputWordle.value)) {
        return alert("Guess must only be letters");
    }
    for (let i = 0; i < 5; i++) {
        const currentLetter = inputWordle.value[i];
        const correctLetter = wordleWord[i];
        
        let id = document.getElementById(wordleArray[0].toString());
        id.textContent = currentLetter;
        wordleArray.shift();

        if (currentLetter === correctLetter) {
            id.style.color = 'green';
        } else if (wordleWord.includes(currentLetter)) {
            id.style.color = 'yellow';
        } else {
            id.style.color = 'grey';
        }
    }

    if (wordleWord === inputWordle.value) {
        let result = document.getElementById("resultMessage");
        result.style.color = 'green';
        result.textContent = "You have won!";
        inputWordle.disabled = true;
    }
    
    if (wordleArray.length === 0) {
        let result = document.getElementById("resultMessage");
        result.textContent = "You have lost! =(";
        result.style.color = 'red';
        inputWordle.disabled = true;
    }

    inputWordle.value = '';

    
}



function isOnlyLetters(value) {
    return /^[A-Za-z]+$/.test(value);
}



