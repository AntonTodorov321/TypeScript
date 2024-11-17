class Trainer {
  name: string;
  numberOfBadges: number = 0;
  pockemons: Pokemon[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

class Pokemon {
  name: string;
  element: string;
  health: number;

  constructor(name: string, element: string, health: number) {
    this.name = name;
    this.element = element;
    this.health = health;
  }
}

function printTrainers(input: string[]) {
  let trainers: Trainer[] = [];

  while (true) {
    const line: string = input.shift();

    if (line === "Tournament") {
      break;
    }

    const trainerPokemonInfo: string[] = line.split(" ");
    const trainerName: string = trainerPokemonInfo[0];
    const pokemonName: string = trainerPokemonInfo[1];
    const pokemonElement: string = trainerPokemonInfo[2];
    const pokemonHealth: number = Number(trainerPokemonInfo[3]);

    let trainer: Trainer | undefined = trainers.find(
      (t) => t.name === trainerName
    );

    if (!trainer) {
      trainer = new Trainer(trainerName);
      trainers.push(trainer);
    }

    const pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
    trainer.pockemons.push(pokemon);
  }

  while (true) {
    const line: string = input.shift();
    if (line === "End") {
      break;
    }

    trainers.forEach((trainer) => {
      if (trainer.pockemons.find((p) => p.element === line)) {
        trainer.numberOfBadges++;
      } else {
        trainer.pockemons.forEach((pokemon, index) => {
          pokemon.health -= 10;

          if (pokemon.health <= 0) {
            trainer.pockemons.splice(index, 1);
          }
        });
      }
    });
  }

  const sortedTrainers: Trainer[] = trainers.sort(
    (a, b) => b.numberOfBadges - a.numberOfBadges
  );

  sortedTrainers.forEach((trainer) => {
    console.log(
      `${trainer.name} ${trainer.numberOfBadges} ${trainer.pockemons.length}`
    );
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
