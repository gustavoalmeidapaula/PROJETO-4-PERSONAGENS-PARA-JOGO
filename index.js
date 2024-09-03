const Character = require('./Character')
const Thief = require('./Thief')
const Mage = require('./Mage')
const Warrior = require('./Warrior')

const hero = new Character('Hero', 100, 20, 15)

const sneakyThief = new Thief('Sneaky Thief', 80, 25, 10)

const powerfulMage = new Mage('Powerful Mage', 90, 18, 12, 30)

const mightyWarrior = new Warrior('Mighty Warrior', 120, 22, 20, 10)

sneakyThief.attack(hero);
powerfulMage.attack(mightyWarrior)

mightyWarrior.changeStance()
mightyWarrior.attack(sneakyThief)

console.log(hero)
console.log(sneakyThief)
console.log(powerfulMage)
console.log(mightyWarrior)
