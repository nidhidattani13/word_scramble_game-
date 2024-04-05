const words = [
    "algorithm",
    "variable",
    "iteration",
    "datastructure",
    "conditional",
    "function",
    "array",
    "loop",
    "recursion",
    "object"
];

const hints = [
    "Problem-solving steps",
    "Stores changing data",
    "Repeated execution",
    "Organizes data",
    "Executes based on conditions",
    "Reusable block of code",
    "Collection of elements",
    "Repetitive execution",
    "Function calls itself",
    "Data structure holding properties"
];

let displayWord = ""; 
let timerInterval; // Variable to hold the timer interval
let timerSeconds = 20; // Total seconds for the timer

function shuffle(str) { 
    strArray = Array.from(str); 
    for (let i = 0; i < strArray.length - 1; ++i) { 
        let j = Math.floor(Math.random() * strArray.length); 
        let temp = strArray[i]; 
        strArray[i] = strArray[j]; 
        strArray[j] = temp; 
    } 
    return strArray.join(" "); 
} 

function check() { 
    let input = document.getElementById("input"); 
    let output = document.getElementById("output"); 
    if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase()) 
        output.innerHTML = "Result: Correct"; 
    else 
        output.innerHTML = "Result: Incorrect"; 
} 

function startTimer() {
    stopTimer(); // Clear any existing interval
    timerInterval = setInterval(function() {
        timerSeconds--;
        document.getElementById("timer").innerText = "Time: " + timerSeconds + "s";
        if (timerSeconds <= 0) {
            stopTimer(); // Stop the timer when time is up
            displayPopup(); // Display the popup when time is up
        }
    }, 1000);
}


function stopTimer() {
    clearInterval(timerInterval);
}

function displayPopup() {
    alert("Time's up! Please refresh to try again."); // Display a simple alert popup
}

function resetTimer() {
    timerSeconds = 20;
    document.getElementById("timer").innerText = "Time: " + timerSeconds + "s";
}

function refresh() { 
    resetTimer(); // Reset the timer to 20 seconds
    index = Math.floor(Math.random() * words.length); 
    displayWord = words[index]; 
    displayHint = hints[index]; 
    scrambleWord = document.getElementById("scrambleWord"); 
    scrambleWord.innerText = shuffle(displayWord).toUpperCase(); 
    let hint = document.getElementById("hint"); 
    hint.innerHTML = "<b>Hint:</b> " + displayHint; 
    document.getElementById("output").innerText = "Result:"; 
    document.getElementById("input").value = ""; 
    startTimer(); // Start the timer for the new word
}

// Function call when page load for first time 
refresh();
