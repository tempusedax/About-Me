'use strict';


  let welcomeUser = prompt('What is your name?');
    alert('Hello there ' + welcomeUser + '. That is a lovely name. Welcome. Lets play a guessing game. Remember, yes/y or no/n answers only. ');

  let userAnswer1 = prompt('Have I been to Frace?').toLowerCase();
    if (userAnswer1 === 'y' || userAnswer1 === 'yes') {
      alert('You got that one right. Nice one');
    } else if (userAnswer1 === 'n' || userAnswer1 === 'no') {
      alert('You got that one incorrect. Bing bong.');
    } else alert(welcomeUser + 'You didnt follow directions... like at all.')


    


