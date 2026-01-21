import promptSync from 'prompt-sync';
const prompt = promptSync();


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
let UserInput = prompt('Enter an year: ');

let year = Number(UserInput);


if(year<1 || year >9999 || isNaN(year)){
    console.log('Invalid Year');}
    else{

 if(year % 4 === 0){
    console.log('Yes,' +year+' is a leap year');
}
else if(year % 100 ===0 || year % 400 === 0){
    console.log('Yes,' +year+' is a leap year');
}
else{
    console.log('No,' +year+' is not a leap year');
}

}
