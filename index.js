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
 

// Initialize display word 
let displayWord = ""; 

// Function to shuffle letters 
function shuffle(str) { 
	strArray = Array.from(str); 
	for (let i = 0; i < strArray.length - 1; ++i) { 
		let j = Math.floor(Math.random() * strArray.length); 
		// Swap letters 
		let temp = strArray[i]; 
		strArray[i] = strArray[j]; 
		strArray[j] = temp; 
	} 
	return strArray.join(" "); 
} 

// Function to check input and display result 
function check() { 
	let input = document.getElementById("input"); 
	let output = document.getElementById("output"); 
	if ( 
		input.value.toLocaleLowerCase() === 
		displayWord.toLocaleLowerCase() 
	) 
		output.innerHTML = "Result: Correct"; 
	else output.innerHTML = "Result: Incorrect"; 
} 


// To refresh and show new word 
function refresh() { 
    index = Math.floor(Math.random() * words.length); 
    displayWord = words[index]; 
    displayHint = hints[index]; 
    scrambleWord = document.getElementById("scrambleWord"); 
    scrambleWord.innerText = shuffle(displayWord).toUpperCase(); 
    let hint = document.getElementById("hint"); 
    hint.innerHTML = "<b>Hint:</b> " + displayHint; 
    document.getElementById("output").innerText = "Result:"; 

    // Clear input field
    document.getElementById("input").value = ""; 
}

// Function call when page load for first time 
refresh();
