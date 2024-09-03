const Character = require('./Character')

class Thief extends Character {
    attack(target) {
        const damage = Math.max(0, 2 * (this.attackPts - target.defensePts))
        target.lifepoints -= damage
    }
}

module.exports = Thief
