const readline = require('readline')
const Mage = require('./Mage')
const Character = require('./Character')
const Warrior = require('./Warrior')
const Thief = require('./Thief')

const rodada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const characters = {
    1: Character,
    2: Mage,
    3: Warrior,
    4: Thief
};

const characterNames = {
    1: "Guerreiro",
    2: "Mago",
    3: "Guerreiro",
    4: "Ladrão"
}

const players = []

function createPlayer(index, maxPlayers) {
    if (index < maxPlayers) {
        rodada.question('Escolha seu personagem (1: Guerreiro, 2: Mago, 3: Guerreiro, 4: Ladrão): ', (charChoice) => {
            rodada.question('Digite seu apelido: ', (nickname) => {
                rodada.question('Escolha sua arma (1: Varinha, 2: Arco, 3: Espada): ', (weaponChoice) => {
                    const CharacterClass = characters[charChoice]
                    const characterName = characterNames[charChoice]
                    const weapon = weaponChoice == 1 ? 'Varinha' : weaponChoice == 2 ? 'Arco' : 'Espada'
                    const player = new CharacterClass(nickname, 100, 20, 10, 10)
                    player.weapon = weapon
                    players.push(player)

                    console.log(`Você escolheu ser um ${characterName} com o apelido ${nickname} e usar uma ${weapon}.`)

                    createPlayer(index + 1, maxPlayers)
                })
            })
        })
    } else {
        startGame()
    }
}

function startGame() {
    const monster = new Character("Monstro", 150, 25, 5)
    let rounds = 4
    console.log("Você entrou numa Floresta...")
    console.log("Enquanto você anda, o chão começou a tremer...")
    console.log("Um monstro apareceu! Lute por sua vida!!!")

    function battleRound() {
        if (rounds > 0 && monster.lifepoints > 0) {
            players.forEach(player => {
                player.attack(monster)
                if (player instanceof Mage) {
                    player.heal(player)
                }
            })

            console.log(`O monstro agora tem ${monster.lifepoints} pontos de vida restantes! Derote-o!`)
            rounds--

            if (monster.lifepoints > 0 && rounds > 0) {
                setTimeout(battleRound, 1000)
            } else {
                if (monster.lifepoints <= 0) {
                    console.log("Parabéns! Você derrotou o monstro!")
                } else {
                    console.log("O monstro sobreviveu. Tente novamente!")
                }
                rodada.close()
            }
        }
    }

    battleRound()
}

rodada.question('Quantos jogadores irão participar? ', (numPlayers) => {
    createPlayer(0, parseInt(numPlayers))
})
