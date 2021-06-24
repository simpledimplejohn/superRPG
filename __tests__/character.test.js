import Character from './../src/js/character.js';

describe('Character', () => {

  test('should check that Character class is present', () => {
    const newCharacter = new Character();
  })

  test('set max health', () => {
    const newCharacter = new Character();
    expect(newCharacter.maxHealth).toEqual(100)
  })

  test('set current health', () => {
    const newCharacter = new Character();
    expect(newCharacter.currentHealth).toEqual(100)
  })

  test('set strength', () => {
    const newCharacter = new Character();
    expect(newCharacter.stregth).toEqual(50)
  })
})

