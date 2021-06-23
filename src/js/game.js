import Character from "./character";
console.log("game works!");

const enemy01 = new Character({});
const player01 = new Character({});

let damager = player01.attack();

function fight() {
  enemy01.currentHealth -= damager;
}

fight();

let damager2 = enemy01.attack();

function fight2() {
  player01.currentHealth -= damager2;
}

fight2();



console.log('damager', damager);
console.log('damager2', damager2);
console.log('enemy health',enemy01.currentHealth);
console.log('player1 health',player01.currentHealth);
