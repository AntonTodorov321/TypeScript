type TownPopulation = {
    townName: string;
    population: number;
};

function printTownPopulation(townsInfo: string[]) {
    let townsPopulation: TownPopulation[] = [];

    for (let index: number = 0; index < townsInfo.length; index++) {
        const townInfo: string[] = townsInfo[index].split(" <-> ");
        const townName: string = townInfo[0];
        const population: number = Number(townInfo[1]);

        const townPopulation: TownPopulation | undefined =
            townsPopulation.find(town => town.townName === townName);

        if (!townPopulation) {
            const townPopulation: TownPopulation = {
                townName,
                population,
            };

            townsPopulation.push(townPopulation);
        } else {
            townPopulation.population += population;
        };
    };

    townsPopulation.forEach((townPopulation: TownPopulation) => {
        console.log(`${townPopulation.townName} : ${townPopulation.population}`);
    });
};