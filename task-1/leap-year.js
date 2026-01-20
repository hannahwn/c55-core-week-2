import promptSync from 'prompt-sync';
const prompt = promptSync();


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
let year = prompt('Enter an year: ');

if (year % 4 == 0){
    console.log('Yes, '+year + ' is a leap year');
    }
   else if(year % 100 == 0){
        console.log('No, '+year+' is not a leap year'); 
}
