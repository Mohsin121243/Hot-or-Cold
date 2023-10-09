// hot_and_cold.js

// Initialize game variables
let targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let currentGuess = 50;
let remainingGuesses = 5;
let log = [];

// Function to update the display
function updateDisplay() {
    document.getElementById("current-guess").textContent = currentGuess;
    document.getElementById("guesses-remaining").textContent = remainingGuesses;

    const guessLog = document.getElementById("guess-log");
    guessLog.innerHTML = "";
    log.forEach((entry) => {
        const listItem = document.createElement("li");
        if(entry == "Congratulations! You won."){
           listItem.className = "win-message"; 
        }
        if(entry == "You lost. The correct number was " + targetNumber+"."){
            listItem.className = "lose-message"; 
         }
        listItem.textContent = entry;
        guessLog.appendChild(listItem);
    });
}

// Event listeners for the add/subtract buttons
document.getElementById("subtract-one").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 1);
    updateDisplay();
});
document.getElementById("subtract-five").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 5);
    updateDisplay();
});
document.getElementById("subtract-ten").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 10);
    updateDisplay();
});
document.getElementById("subtract-twenty-five").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 25);
    updateDisplay();
});
document.getElementById("add-one").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess + 1);
    updateDisplay();
});
document.getElementById("add-five").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess + 5);
    updateDisplay();
});
document.getElementById("add-ten").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess + 10);
    updateDisplay();
});
document.getElementById("add-twenty-five").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess + 25);
    updateDisplay();
});


// Event listener for the commit button
document.getElementById("commit").addEventListener("click", () => {
    const difference = Math.abs(targetNumber - currentGuess);
    let response = "";
    if (difference <= 5) {
        response = "Very Hot";
    } else if (difference <= 8) {
        response = "Hot";
    } else if (difference <= 15) {
        response = "Very Warm";
    } else if (difference <= 20) {
        response = "Warm";
    } else if (difference <= 30) {
        response = "Cool";
    } else if (difference <= 40) {
        response = "Very Cool";
    } else if (difference <= 55) {
        response = "Cold";
    } else {
        response = "Very Cold";
    }

    // Check if the computer lies (5% chance)
    if (Math.random() < 0.05) {
        response = "Mischievous Computer: " + response;
    }

    log.push(`Guess: ${currentGuess}, Response: ${response}`);

    if (currentGuess === targetNumber) {
        log.push("Congratulations! You won.");
        document.getElementById("commit").disabled = true;
    } else {
        remainingGuesses--;

        if (remainingGuesses === 0) {
            log.push(`You lost. The correct number was ${targetNumber}.`);
            document.getElementById("commit").disabled = true;
        }
    }

    updateDisplay();
});

// Event listener for the reset button
document.getElementById("reset").addEventListener("click", () => {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    currentGuess = 50;
    remainingGuesses = 5;
    log = [];
    document.getElementById("commit").disabled = false;
    updateDisplay();
});

// Initial display update
updateDisplay();
