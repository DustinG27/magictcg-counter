// connect life gain and loss buttons
const lifeLoss = document.querySelector("#lossone");
const lifeLossTwo = document.querySelector("#losstwo");
const lifeGain = document.querySelector("#gainone");
const lifeGainTwo = document.querySelector("#gaintwo");

//game type button and reset button link
const resetBtn = document.querySelector("#reset");
const gameType = document.querySelector("#game-type");

// connecting total lives
const playerOne = document.querySelector("#playerone");
const playerTwo = document.querySelector("#playertwo");

// game state functionality
gameType.addEventListener("change", function() {
    // let standard = 20;
    // let brawl = 25;
    // let edh = 30;
    // let edh2 = 40;

   switch (gameType.value) {
       case "standard":
           counterOne = 20;
           counterTwo = 20;
           playerOne.textContent = counterOne;
        playerTwo.textContent = counterTwo;
           break;
        case "brawl":
            counterOne = 25;
            counterTwo = 25;
            playerOne.textContent = counterOne;
            playerTwo.textContent = counterTwo;
            break;
        case "edh":
            counterOne = 30;
            counterTwo = 30;
            playerOne.textContent = counterOne;
            playerTwo.textContent = counterTwo;
            break;
        case "edh-multiple":
            counterOne = 40;
            counterTwo = 40;
            playerOne.textContent = counterOne;
            playerTwo.textContent = counterTwo;
            break;
        default:
            counterOne = 0;
            counterTwo = 0;
            break;
   };
});

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

// reset button functionality
resetBtn.addEventListener("click", function() {
    counterOne = 0;
    counterTwo = 0;
    playerOne.textContent = counterOne;
    playerTwo.textContent = counterTwo;
})

