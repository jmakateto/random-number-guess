
const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let running = true;


// while(running){

//     guess = prompt(`Guess a number between ${minNum} and ${maxNum} `)
//     guess = parseInt(guess);

//     console.log (guess)

//     if (isNaN(guess)){
//         // alert("Enter valid number")
        
//         document.querySelector(".results").innerHTML = "Enter valid number"
        
//     }else if(guess < 1 || guess > 100){
//         // alert("Enter number between 1 and 100")

//         document.querySelector(".results").innerHTML = "Enter number between 1 and 100"
        
//     }else{
//         attempts++;
//         if(guess === randomNum){
//             // alert(`You guessed it! The answer was ${randomNum} it took you ${attempts} attempts.  Congragulations!`)

//             document.querySelector(".results").innerHTML = `You guessed it! The answer was ${randomNum} it took you ${attempts} attempts.  Congragulations!`

//             running = false; // Stop the game after a correct guess.

//     }else if (guess < randomNum){
//         // alert("Too low, try again")

//         document.querySelector(".results").innerHTML = "Too low, try again"
//     }
//     else if(guess > randomNum){
//         // alert("Too high, try again")
//         document.querySelector(".results").innerHTML = "Too high, try again"
//         // running = false
//     }

// }

    
// }


 function handleGuess() {
    
    if (!running) return; // If the game is over, do nothing.

    const inputField = document.querySelector('input');
    let guess = Number(inputField.value);

    if (isNaN(guess)) {
        document.querySelector(".results").innerHTML = "Enter a valid number.";
    } else if (guess < minNum || guess > maxNum) {
        document.querySelector(".results").innerHTML = `Enter a number between ${minNum} and ${maxNum}.`;
    } else {
        attempts++;
        if (guess === randomNum) {
            document.querySelector(".results").innerHTML = `You guessed it! The answer was ${randomNum}. It took you ${attempts} attempts. Congratulations!`;
            running = false; // Stop the game after a correct guess.
        } else if (guess < randomNum) {
            document.querySelector(".results").innerHTML = "Too low, try again.";
        } else if (guess > randomNum) {
            document.querySelector(".results").innerHTML = "Too high, try again.";
        }
    }

    // Clear the input field for the next guess
    inputField.value = '';
    inputField.focus(); // Focus the input field for better UX
};


// Event listener for pressing "Enter" in the input field
document.querySelector('input').addEventListener('keypress', function(event)
{
    if(event.key == 'Enter'){
        handleGuess()
    }
})

// Event listener for the button click
document.querySelector('button').addEventListener('click', handleGuess);