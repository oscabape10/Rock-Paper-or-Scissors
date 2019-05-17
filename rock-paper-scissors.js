//Create function that takes a single parameter userInput. toLowerCase() function to make the userInput all lowercase.
//Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){ 
     return userInput;
   } 
   else {
     console.log('Error!');
   }
 };
 //New function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
 const getComputerChoice = () =>{
   const randomNumber =
    Math.floor(Math.random() * 3);
   switch(randomNumber){
     case 0: 
       return 'rock';
     case 1: 
       return 'paper';
     case 2:
       return 'scissors';
   }
 }
 //New function named that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.
 //if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.
 const determineWinner = (userChoice, computerChoice) =>{
   if(userChoice === 'bomb'){
     return 'You destroyed your oponent! Congrats!'
   }
     
   if(userChoice === computerChoice){
     return 'The game is a tie!.';
   }
   
   if(userChoice === 'rock') {
     if(computerChoice === 'paper') {
       return 'The Computer won!';
     } else {
      return 'User won!.';
     }
   }
   
    if(userChoice === 'paper') {
     if(computerChoice === 'scissors') {
       return 'Computer won!';
     } else {
       return 'User won!.';
     }
    }
 
   if(userChoice === 'scissors') {
     if(computerChoice === 'rock') 
       return 'Computer won!';
      else {
      return 'User won!.';
     }
    }
  }
 //A Function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.
 //Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.
 //Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
 const playGame = () =>{
   const userChoice = 
   getUserChoice ('rock');
   const computerChoice =  
   getComputerChoice ();
 console.log('Your choice is:' 
 + userChoice );
 console.log('Your choice is:'
 + computerChoice );
   
  console.log(determineWinner(userChoice,computerChoice));
 }
 //call function to play the game.
 playGame();
