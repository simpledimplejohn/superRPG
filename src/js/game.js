import Character from "./character";
console.log("game works!");


export default class Game {
  constructor (playerProperties, enemyProperties) {
    this.player01 = new Character(playerProperties);
    this.enemy01 = new Character(enemyProperties);
  }
  
  fight (playerAction, enemyAction) {
    
    if (playerAction.action === 'attack') {
      let damage = playerAction.attack || this.player01.attack(); // random()

      console.log(`player 1 attacked for ${damage} damage!`);

      if (enemyAction.action === 'defend') {
        const defense = enemyAction.defend || this.enemy01.defend(); // random()

        damage -= defense;
        if (damage < 0) damage = 0;
        console.log(`enemy 1 defended the attack, subtracted ${defense} damage!`);
      }

      this.enemy01.currentHealth -= damage;
    }

    if (enemyAction.action === 'attack') {
      let damage = enemyAction.attack ||this.enemy01.attack(); // random()

      console.log(`enemy 1 attacked for ${damage} damage!`);

      if (playerAction.action === 'defend') {
        const defense = playerAction.defend || this.player01.defend(); // random()

        damage -= defense;
        if (damage < 0) damage = 0;
        console.log(`player 1 defended the attack, subtracted ${defense} damage!`);
      }

      this.player01.currentHealth -= damage;
    }
  }
}


// function game () {
//   const enemy01 = new Character({});
//   const player01 = new Character({});

  

  // fight(
  //   { action: 'attack', attack: 10, defend: 0 }, 
  //   { action: 'defend', attack: 8, defend: 10 },
  // );

//   console.log('enemy health',enemy01.currentHealth);
//   console.log('player1 health',player01.currentHealth);
// }

// game();


// fight('attack', 'attack')
// fight(
//   { action: 'attack', attack: 10, defend: 0 },
//   { action: 'defend', attack: 8, defend: 1 }
// )