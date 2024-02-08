const wordsWithHints = [
    { word: "javascript", hint: "Scripting language for web pages" },
    { word: "html", hint: "Markup language for web pages" },
    { word: "css", hint: "Style sheet language" },
    { word: "python", hint: "Versatile programming language" },
    { word: "ruby", hint: "Dynamic object-oriented language" },
    { word: "java", hint: "High-level object-oriented language" },
    { word: "php", hint: "General-purpose scripting language" },
    { word: "swift", hint: "Programming language for Apple platforms" }
  ];
  let currentWordObject = {};
  
  function shuffleWord(word) {
    return word.split('').sort(function(){return 0.5-Math.random()}).join('');
  }
  
  function newWord() {
    const randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    currentWordObject = wordsWithHints[randomIndex];
    const scrambledWord = shuffleWord(currentWordObject.word);
    document.getElementById('word-container').textContent = scrambledWord;
    // Display up to 3 words of the hint
    const hintWords = currentWordObject.hint.split(' ').slice(0, 3).join(' ');
    document.getElementById('hint').textContent = `Hint: ${hintWords}`;
  }
  
  function checkAnswer() {
    const userGuess = document.getElementById('input-box').value.toLowerCase();
    if (userGuess === currentWordObject.word) {
      alert('Congratulations! You guessed the word correctly.');
      newWord();
      document.getElementById('input-box').value = ""; // Clear input field
    } else {
      alert('Oops! Incorrect guess. Try again.');
    }
  }
  
  document.getElementById('submit-button').addEventListener('click', checkAnswer);
  
  // Initialize the game with a random word and hint
  newWord();
  