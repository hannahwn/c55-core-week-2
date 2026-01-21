// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  
  // Write your code here.
  // Use the variables 'username' and 'password' to access the input values
  // Use incorrectAttempts to track the number of failed attempts

  const validUsers =[
    {username : 'admin', password : 'Hack1234'},
    {username : 'user', password : 7654321}
  ];
  if (incorrectAttempts >= 4){
    errorMessage('Login blocked: Too many incorrect attempts');
    return;
  }
    
    let foundCorrectUser = false;
    
    
    if (username === validUsers[0].username && password === validUsers[0].password) {
        foundCorrectUser = true;
    }
    
    
    if (username === validUsers[1].username && password === validUsers[1].password) {
        foundCorrectUser = true;
    }
    
    

}

// Do not change the line below
export { onLogin };
