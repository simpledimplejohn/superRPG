import Character from './../src/js/character.js';

describe('Character', () => {

  test('should check that Character class is present', () => {
    const newCharacter = new Character();
  })

  test('set character default properties', () => {
    const newCharacter = new Character();
    expect(newCharacter).toEqual({
      level: 1,
      maxHealth: 100,
      currentHealth: 100,
      strength: 50,
    })
  })

  test('can override default character properties', () => {
    const newCharacter = new Character({
      level: 2,
      maxHealth: 200,
      currentHealth: 150,
      strength: 70,
    })

    expect(newCharacter).toEqual({
      level: 2,
      maxHealth: 200,
      currentHealth: 150,
      strength: 70,
    })
  })

  test('attack() returns a slightly randomized number based on strength', () => {
    const character = new Character()

    for (let i = 0; i < 100; i++) {
      const damage = character.attack()
  
      expect(damage).toBeGreaterThanOrEqual(5)
      expect(damage).toBeLessThanOrEqual(15)
    }
  })

  test('isDead() returns true if currentHealth is less than or equal to 0', () => {
    const character = new Character()
    character.currentHealth = 0

    expect(character.isDead()).toEqual(true)
  })

  test('isDead() returns false if currentHealth is greater than 0', () => {
    const character = new Character()
    character.currentHealth = 1

    expect(character.isDead()).toEqual(false)
  })

  test('defend() returns a slightly randomized number based on defense', () => {
    const character = new Character()

    for (let i = 0; i < 100; i++) {
      const antiDamage = character.defend()

      expect(antiDamage).toBeGreaterThanOrEqual(1)
      expect(antiDamage).toBeLessThanOrEqual(8)
    }
  })
  
})

