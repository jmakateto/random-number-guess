
const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let running = true;


while(running){

    guess = prompt(`Guess a number between ${minNum} and ${maxNum} `)
    guess = parseInt(guess);

    console.log (guess)

    if (isNaN(guess)){
        alert("Enter valid number")
    }else if(guess < 1 || guess > 100){
        alert("Enter number between 1 and 100")
        
    }else{
        attempts++;
        if(guess === randomNum){
            alert(`You guessed it! The answer was ${randomNum} it took you ${attempts} attempts.  Congragulations!`)
    }else if (guess < randomNum){
        alert("Too low, try again")
    }
    else if(guess > randomNum){
        alert("Too high, try again")
        // running = false
    }

}

    
}