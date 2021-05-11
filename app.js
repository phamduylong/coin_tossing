//initial variables 
let wins = 0;
let heads = 0;
let reverses = 0;
let result_history = [];

//main function

function play() {
  const userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice', userChoice);
  const result = Math.random();
  let flipresult;
  if (result <= 0.49) {
    flipresult = "head";
    coinImage.src = 'head.png';
    heads++;
    headCount.textContent = String(heads);
  } else {
    flipresult = "reverse";
    coinImage.src = "reverse.png";
    reverses++;
    reverseCount.textContent = String(reverses);
  }
  if (result_history.length >= 10) {
    result_history.splice(0, result_history.length);
  }
  
  result_history.push(flipresult);
  console.log(result_history);
  console.log("flip result " + flipresult);

  
  
  let y = result_history.toString();

  document.getElementById('result-history').innerHTML = y;
  if (flipresult == userChoice) {
    //console.log("You won");
    resultParagraph.textContent = 'You won ヾ(⌐■_■)ノ♪';
  }
  if (flipresult != userChoice) {
    //console.log("You lost!");
    resultParagraph.textContent = 'You lost ( ˘︹˘ ) Try again!';
  }

  if (resultParagraph.textContent == "You won ヾ(⌐■_■)ノ♪") {
    wins++;

    winCount.textContent = String(wins);
    
  }

}


//reference to elements through ids
const coinImage = document.querySelector('#coin-image');

const winCount = document.querySelector('#win-count');

const result = document.querySelector('#result-history');

const headCount = document.querySelector('#head-count');

const reverseCount = document.querySelector('#reverse-count');

const resultParagraph = document.querySelector('#result');


// Add functionality to button by binding a button click event and a listener function
const throwButton = document.querySelector('#throw-button');

throwButton.addEventListener('click', play);

//set default value
winCount.textContent = "0";

headCount.textContent = "0";

reverseCount.textContent = "0";






