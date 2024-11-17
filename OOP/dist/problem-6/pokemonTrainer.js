class Trainer {
    name;
    numberOfBadges = 0;
    pockemons = [];
    constructor(name) {
        this.name = name;
    }
}
class Pokemon {
    name;
    element;
    health;
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
function printTrainers(input) {
    let trainers = [];
    while (true) {
        const line = input.shift();
        if (line === "Tournament") {
            break;
        }
        const trainerPokemonInfo = line.split(" ");
        const trainerName = trainerPokemonInfo[0];
        const pokemonName = trainerPokemonInfo[1];
        const pokemonElement = trainerPokemonInfo[2];
        const pokemonHealth = Number(trainerPokemonInfo[3]);
        let trainer = trainers.find((t) => t.name === trainerName);
        if (!trainer) {
            trainer = new Trainer(trainerName);
            trainers.push(trainer);
        }
        const pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
        trainer.pockemons.push(pokemon);
    }
    while (true) {
        const line = input.shift();
        if (line === "End") {
            break;
        }
        trainers.forEach((trainer) => {
            if (trainer.pockemons.find((p) => p.element === line)) {
                trainer.numberOfBadges++;
            }
            else {
                trainer.pockemons.forEach((pokemon, index) => {
                    pokemon.health -= 10;
                    if (pokemon.health <= 0) {
                        trainer.pockemons.splice(index, 1);
                    }
                });
            }
        });
    }
    const sortedTrainers = trainers.sort((a, b) => b.numberOfBadges - a.numberOfBadges);
    sortedTrainers.forEach((trainer) => {
        console.log(`${trainer.name} ${trainer.numberOfBadges} ${trainer.pockemons.length}`);
    });
}
printTrainers([
    "Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End",
]);
//# sourceMappingURL=pokemonTrainer.js.map