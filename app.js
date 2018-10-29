console.log("Hello world");

const chalk = require('chalk');
 
console.log(chalk.green('Hello world!'));

const chalkAnimation = require('chalk-animation');
 


chalkAnimation.rainbow('This is pretty cool');
setTimeout(() => {
    // Stop the 'Lorem ipsum' animation, then write on a new line.
    console.log('Remember to change the wording');
}, 1000);

chalkAnimation.rainbow('Lorem ipsum', 2);