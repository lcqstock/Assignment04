// Countdown

let userInput = prompt("Enter a number to count down from: ");
let count = parseInt(userInput);

if (isNaN(count) || count < 0) {
    alert("Please enter a valid positive number.");   
  }

for (let i = count; i >= 0; i--) {
    console.log(i);
}