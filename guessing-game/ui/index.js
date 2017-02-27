const GuessingLogic = require('guessing-game-logic');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});
var tries = 7;
var guessInstance = new GuessingLogic();
console.log(`
Welcome to the GUESSING Game
----------------------------

guess number between 1-100
`);
rl.prompt();
rl.on('line', (line) => {
    tries--;
    var g = guessInstance.guess(line);
    console.log(g.message);
    if (g.result === 0) {
        process.exit(0);
    } else {
        console.log('your left ' + tries + ' tries');
    }
    if (tries === 0) {
        console.log('you lose');
    } else {
        rl.prompt();
    }
});


