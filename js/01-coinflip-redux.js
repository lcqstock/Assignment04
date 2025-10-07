let coinFlip;
let counter01 = parseInt(prompt('Please enter a pisitive number: '));

for (let i = 0; i < counter01; i++) {
   coinFlip = Math.round(Math.random());
   if (coinFlip == 0) {
    console.log('Heads');
   } else {
    console.log('Tails');
   }
}