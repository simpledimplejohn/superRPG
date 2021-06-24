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

  test('passes character properties correctly', () => {
    const game = new Game(
      {
        level: 2,
        strength: 10,
        maxHealth: 70,
        currentHealth: 70,
      },
      {
        level: 3,
        strength: 30,
        maxHealth: 60,
        currentHealth: 50,
      }
    );

    expect(game.player01).toEqual({
      level: 2,
      strength: 10,
      maxHealth: 70,
      currentHealth: 70,
    });

    expect(game.enemy01).toEqual({
      level: 3,
      strength: 30,
      maxHealth: 60,
      currentHealth: 50,
    });
  });

  test('test the fight() methode decreases character\'s current health', () => {
    const game = new Game(
      {
        level: 1,
        strength: 10,
        maxHealth: 70,
        currentHealth: 70,
      },
      {
        level: 1,
        strength: 30,
        maxHealth: 100,
        currentHealth: 100,
      }
    );

    game.fight(
      {action: 'attack', attack: 10, defend: 0 },
      {action: 'attack', attack: 10, defend: 10 },
    );
      
    expect(game.player01.currentHealth).toEqual(60);
    expect(game.enemy01.currentHealth).toEqual(90);
  });

  test('when player01 defends and enemy attacks works right', () => {
    const game = new Game(
      {
        level: 1,
        strength: 10,
        maxHealth: 70,
        currentHealth: 70,
      },
      {
        level: 1,
        strength: 30,
        maxHealth: 100,
        currentHealth: 100,
      }
    );

    game.fight(
      {action: 'defend', defend:8},
      {action: 'attack', attack: 10, defend:0}
    );

    expect(game.player01.currentHealth).toEqual(68);
    expect(game.enemy01.currentHealth).toEqual(100);
  });

  test('', () => {
    const game = new Game(
      {
        level: 1,
        strength: 10,
        maxHealth: 70,
        currentHealth: 70,
      },
      {
        level: 1,
        strength: 30,
        maxHealth: 100,
        currentHealth: 100,
      }
    );

    game.fight(
      {action: 'attack', attack: 5, defend: 0},
      {action: 'defend', attack: 0, defend: 5}
    );

    expect(game.player01.currentHealth).toEqual(70);
    expect(game.enemy01.currentHealth).toEqual(100);
  });
});