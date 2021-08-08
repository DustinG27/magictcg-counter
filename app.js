// connect life gain and loss buttons
const lifeLoss = document.querySelector("#lossone");
const lifeLossTwo = document.querySelector("#losstwo");
const lifeGain = document.querySelector("#gainone");
const lifeGainTwo = document.querySelector("#gaintwo");

// connecting total lives
const playerOne = document.querySelector("#playerone");
const playerTwo = document.querySelector("#playertwo");

// setting life totals to 0
counterOne = 0;
counterTwo = 0;

// connecting the totals to the html
playerOne.append(counterOne);
playerTwo.append(counterTwo);


lifeGain.addEventListener('click', function() {
    counterOne += 1;
    playerOne.textContent = counterOne;
})

lifeLoss.addEventListener('click', function() {
    counterOne -= 1;
    playerOne.textContent = counterOne;
})

lifeGainTwo.addEventListener('click', function() {
    counterTwo += 1;
    playerTwo.textContent = counterTwo;
})

lifeLossTwo.addEventListener('click', function() {
    counterTwo -= 1;
    playerTwo.textContent = counterTwo;
})

function gameState() {
    
}