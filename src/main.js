import Game from './js/game.js';

console.log(`
  /\\
  ||
  ||
  ||
  ||
 ----
  ||
  --
`);



// function doThing () {
//   return 42
// }

// const ididthing = doThing()

async function doTheThing () {
  const game = new Game();

  for (; !game.player01.isDead() && !game.enemy01.isDead();) {  // 
    // Math.floor(Math.random() * (max - min + 1) + min)

    // attack, defend
    // 1 - 2
    
    let value =  Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (value === 1) {
      game.player01.action = 'attack';
    } else if (value === 2) {
      game.player01.action = 'defend';
    }
    let valueTwo = Math.floor(Math.random()* (2 - 1 + 1) + 1);
    if (valueTwo === 1) {
      game.enemy01.action = 'attack';
    } else if (valueTwo === 2) {
      game.enemy01.action = 'defend';
    }

    game.fight(
      {action: game.player01.action},
      {action: game.enemy01.action},
    );

    console.log('enemy currentHealth: ',game.enemy01.currentHealth);

    console.log('player currentHealth: ',game.player01.currentHealth);

    await new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }

  if (game.player01.isDead()) {
    console.log("%cYou Lose!", 'font-size: 40px;');
  } else {
    console.log("%cYou Win!", 'font-size: 40px;');
  }
}

doTheThing();

// console.log(`
// x x
//  -
// `)

// THATS AWESOME!!! 
// YEA LETS DO IT!