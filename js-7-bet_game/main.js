// get the first box input -> generate random number with the first box number the range -> generate guess-number -> if they are same number -> you win

const rangeInput = document.querySelector('.range-number-input');
const guessInput = document.querySelector('.guess-number-input');
const playButton = document.querySelector('.play-button');
const resultContainer = document.querySelector('.result'); 



function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}


function handleGuessInput(event){
    // event.preventDefault();

    // resultContainer.innerText = "";

    const span = document.createElement("span");
    span.innerText = `You chose: ${guessInput.value}, `;
    resultContainer.appendChild(span);
}


function handlePlayButton(event){
//   event.preventDefault();
  const maxNumber = parseInt(rangeInput.value);
  const guessNumber = parseInt(guessInput.value);

  const randomNumber = generateRandomNumber(maxNumber);
  const span = document.createElement("span");
  span.innerText = `the machine chose: ${randomNumber}`;
  resultContainer.appendChild(span);
  

  const p = document.createElement("p");
  if (guessNumber === randomNumber){
    p.innerText = 'You won!'
  }
  else{
    p.innerText = 'You lost!'
  }
  resultContainer.appendChild(p);
}



// range-number-input.addEventListener("submit", );

guessInput.addEventListener("input",handleGuessInput);
playButton.addEventListener('click', handlePlayButton);


