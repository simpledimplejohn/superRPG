Character Stats
    randomly pick a character class
    Normal health and current health 
    Health bar 
    Given Enemy 
    press fight button/ fight state
    Choice to attack or defend during fight 
        Attack button
        Defend button
    Fight to death 
    Click attack/defend
        Reduces enemy health by our health 
        Randomness 
        Defend? random amount
        Random strength 
    Defense Stat
        Armor to increase 
    X amount in healing potions
    
        Heal in a battle
        Potions button during battle but only if character has postions
    

class Character
    - id / name
    - level
    - maxHealth
    - currentHealth
    - strength
    - defense (might not use yet)
    - inventory {
        healthPotions: (number, how many we have)
    }

    attack () {}
    defend () {}

    doAction () {} // attack or defend, check win

// some way to represent a "turn"
// starts by attack or defend
// then check results

function turn () {
    playerObject
    enemyObject

    // check if player attacked or defended
    // enemy randomly attacks or defends

    if (player attacks) {
        enemy health goes down, based on stats
        check your enemy health, endGame() if 0 or less
    }

    if (enemy attacks) {
        player health goes down, based on stats
        check player health, endGame() if 0 or less
    }
}

function endGame () {
    // figure out what to do then
}

// only run turn when we click one of the buttons

// at start, present buttons to the user
// when they click buttons, runs a function that creates a new character
// what stats depend on which button

// then allow user to click buttons for turn stuff