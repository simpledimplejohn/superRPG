import Game from './../src/js/game.js';


describe('Game', () => {
  test('should check that Game class is present', () => {
    new Game();
  });

  test('should check if enemy01 and player01 are created', () => {
    const game = new Game();
    expect(game.enemy01).toEqual({
      level: 1,
      maxHealth: 100,
      currentHealth: 100,
      strength: 50,
    });
    expect(game.player01).toEqual({
      level: 1,
      maxHealth: 100,
      currentHealth: 100,
      strength: 50,
    });

  });

  test('make strong enemy and a weak player', () => {
    const game = new Game(45, 70);
    expect(game.enemy01.strength).toEqual(70);
    expect(game.player01.strength).toEqual(45);
  });
});