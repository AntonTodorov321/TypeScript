function printTownPopulation(townsInfo) {
    let townsPopulation = [];
    for (let index = 0; index < townsInfo.length; index++) {
        const townInfo = townsInfo[index].split(" <-> ");
        const townName = townInfo[0];
        const population = Number(townInfo[1]);
        const townPopulation = townsPopulation.find(town => town.townName === townName);
        if (!townPopulation) {
            const townPopulation = {
                townName,
                population,
            };
            townsPopulation.push(townPopulation);
        }
        else {
            townPopulation.population += population;
        }
        ;
    }
    ;
    townsPopulation.forEach((townPopulation) => {
        console.log(`${townPopulation.townName} : ${townPopulation.population}`);
    });
}
;
//# sourceMappingURL=townPopulation.js.map