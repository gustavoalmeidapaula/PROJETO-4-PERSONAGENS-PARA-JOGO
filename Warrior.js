const Character =require('./Character')

class Warrior extends Character{
    constructor(name, lifepoints, attackPts, defensePts, shieldPts){
        this.name=name
        this.lifepoints=lifepoints
        this.attackPts=attackPts
        this.defensePts=defensePts
        this.shieldPts=shieldPts
        this.position= 'defese'
    }
    attack(target) {
        if (this.position === 'attack') {
            const damage = this.attackPts - target.defensePts;
            if (damage > 0) {
                target.lifepoints -= damage;
            }
            console.log(`${this.name} atacou ${target.name} e causou ${damage} pontos de dano!`);
        } else {
            console.log(`${this.name} está em posição de defesa e não pode atacar.`);
        }
        console.log(`${target.name} agora tem ${target.lifepoints} pontos de vida restantes.`);
    }

    changeStance() {
        if (this.position === 'attack') {
            this.position = 'defense';
            this.defensePts += this.shieldPts;
        } else {
            this.position = 'attack';
            this.defensePts -= this.shieldPts;
        }
        console.log(`${this.name} mudou para a posição de ${this.position}.`);
    }
}
module.exports= Warrior
