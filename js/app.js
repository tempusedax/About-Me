'use strict';

userGuess();
userGuessOne();
userGuessTwo();
userGuessThree();
userGuessFour();
userGuessFive();

function userGuess(){
  // prompt my user for their name
  let welcomeUser = prompt('What is your name?');
    alert('Hello there ' + welcomeUser + '. That is a lovely name. Welcome. Lets play a guessing game. Remember, yes/y or no/n answers only. ');
};

function userGuessOne(){

  let userAnswer1 = prompt('Have I been to Frace?').toLowerCase();
    if (userAnswer1 === 'y' || userAnswer1 === 'yes') {
      alert('Nice one. Ive actually been to quite a few places in Europe.');
    } else if (userAnswer1 === 'n' || userAnswer1 === 'no') {
      alert('You got that one incorrect. Bing bong.');
    } else alert(welcomeUser + ' You didnt follow directions... like at all.')
  };

function userGuessTwo(){

// <<<<<<< main
//   let userAnswer2 = prompt('I am the only child sadly.').toLowerCase();
//     if (userAnswer2 === 'y' || userAnswer2 === 'yes') {
//       alert('I have six older siblings. Very wrong friend.');
//     } else if (userAnswer2 === 'n' || userAnswer2 === 'no') {
//       alert('Correctamundo. I am actually the youngest of 6');
//     } else alert(welcomeUser + ' You didnt follow directions... like at all.')
//   };
// >>>>>>> main

  function userGuessThree(){ 
  let userAnswer3 = prompt('Sci-fi is my favorite kind of media?').toLowerCase();
    if (userAnswer3 === 'y' || userAnswer3 === 'yes') {
      alert('Favorite is an understatement but rightio!');
    } else if (userAnswer3 === 'n' || userAnswer3 === 'no') {
      alert('Wrong. Bing bong.');
    } else alert(welcomeUser + ' You didnt follow directions... like at all.')
  };

  function userGuessFour(){
  let userAnswer4 = prompt('Video games are a waste of time.').toLowerCase();
    if (userAnswer4 === 'y' || userAnswer4 === 'yes') {
      alert('error 404');
    } else if (userAnswer4 === 'n' || userAnswer4 === 'no') {
      alert('It wasnt even a question and you got it right. Look at you!');
    } else alert(welcomeUser + ' You didnt follow directions... like at all.')
  };

  function userGuessFive(){
  let userAnswer5 = prompt('I am trilingual').toLowerCase();
    if (userAnswer5 === 'y' || userAnswer5 === 'yes') {
      alert('I wish, you are super wrong bud');
    } else if (userAnswer5 === 'n' || userAnswer5 === 'no') {
      alert('Sadly you are right.');
    } else alert(welcomeUser + ' You didnt follow directions... like at all.')
  };

function guessNumber(){    
    let userGuess = +prompt('Guess a number between 1-10. You get 4 chances.');
    let rightNumber = 8;
    let guesses = 4;

    for (let i = 0; i < 3; i++){
      if(userGuess === rightNumber) {
        alert('You guessed correctly! Cool ~~');
        i = 4;
        break;
      } else if (userGuess < rightNumber){
        alert('You guessed too low.');
        userGuess = +prompt('Guess again...');
      } else if (userGuess > rightNumber){
        alert('You guessed to high');
        userGuess = +prompt('Guess again...');
      }
    }
  };

  guessNumber();