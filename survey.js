const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let obj = {};

rl.question('What is your name? ', (answer) => {
obj.name = answer;
rl.question('What\'s an activity you like doing? ', (answer) => {
  obj.activity = answer;
  rl.question('What do you listen to while doing that? ', (answer) => {
    obj.music = answer;
    rl.question('Which meal is your favourite? ', (answer) => {
      obj.meal = answer;
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
        obj.food = answer;
        rl.question('Which sport is your absolute favourite? ', (answer) => {
          obj.sport = answer;
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
            obj.superpower = answer;
            rl.close();
            console.log(`${obj.name} listens ${obj.music} while ${obj.activity}, favorite food ${obj.food} favorite meal ${obj.meal}, favorite sport ${obj.sport} and is amazing at ${obj.superpower}.`);
          });
        });
      });
    });
  });
});   
});
