export default class Character {
  constructor (myProperties = {}) {
    this.level = myProperties.level || 1;
    this.maxHealth = myProperties.maxHealth || 100;
    this.currentHealth = myProperties.currentHealth || 100;
    this.strength = myProperties.strength || 50;
  }

  attack () {
    return Math.floor(Math.random() * 11 + 5);
  }

  defend () {
    return Math.floor(Math.random() * 15 + 1);
  }

  isDead () {
    return this.currentHealth <= 0;
  }
}