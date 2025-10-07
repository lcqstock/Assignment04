// Marco! Polo!

for (let i = 1; i <= 100; i++) {
  // For multiples of both 3 and 5 print "Marco! Polo!"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Marco! Polo!");
  } 
  // For multiples of 3, print "Marco!"
  else if (i % 3 === 0) {
    console.log("Marco!");
  } 
  // for multiples of 5, print "Polo!"
  else if (i % 5 === 0) {
    console.log("Polo!");
  } 
  // Otherwise, print the number
  else {
    console.log(i);
  }
}