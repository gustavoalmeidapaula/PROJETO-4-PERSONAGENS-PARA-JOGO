const Character= require('./Character') 

class Thief extends Character{
    constructor(name, lifepoints, attackPts, defensePts) {
        super(name, lifepoints, attackPts, defensePts);
    }
    attack(target) {
        const damage = 2 * (this.attackPts - target.defensePts);
        if (damage > 0) {
            target.lifepoints -= damage;
        }
        console.log(`${this.name} atacou ${target.name} e causou ${damage} pontos de dano!`);
        console.log(`${target.name} agora tem ${target.lifepoints} pontos de vida restantes.`);
        }
    }
module.exports= Thief
