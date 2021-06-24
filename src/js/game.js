import Character from "./character";
console.log("game works!");


export default class Game {
  constructor(player01Strength, enemy01Strength) {
    this.enemy01 = new Character({
      strength: enemy01Strength
    });
    this.player01 = new Character({
      strength: player01Strength
    });

  }
}

/*
function game () {
  const enemy01 = new Character({});
  const player01 = new Character({});

  function fight (playerAction, enemyAction) {
    
    if (playerAction === 'attack') {
      let damage = player01.attack();

      console.log(`player 1 attacked for ${damage} damage!`);

      if (enemyAction === 'defend') {
        const defense = enemy01.defend();

        damage -= defense;
        if (damage < 0) damage = 0;
        console.log(`enemy 1 defended the attack, subtracted ${defense} damage!`);
      }

      enemy01.currentHealth -= damage;
    }

    if (enemyAction === 'attack') {
      let damage = enemy01.attack();

      console.log(`enemy 1 attacked for ${damage} damage!`);

      if (playerAction === 'defend') {
        const defense = player01.defend();

        damage -= defense;
        if (damage < 0) damage = 0;
        console.log(`player 1 defended the attack, subtracted ${defense} damage!`);
      }

      player01.currentHealth -= damage;
    }
  }

  fight('defend', 'attack');

  console.log('enemy health',enemy01.currentHealth);
  console.log('player1 health',player01.currentHealth);
}

game();
*/
