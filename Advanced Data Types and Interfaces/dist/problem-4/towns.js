;
const getTowns = (townsInfo) => {
    const towns = [];
    for (let index = 0; index < townsInfo.length; index++) {
        const townInfo = townsInfo[index].split(" | ");
        const townName = townInfo[0];
        const latitude = Number(Number(townInfo[1]).toFixed(2));
        const longitude = Number(Number(townInfo[2]).toFixed(2));
        const town = {
            town: townName,
            latitude,
            longitude,
        };
        towns.push(town);
    }
    ;
    return towns;
};
//# sourceMappingURL=towns.js.map