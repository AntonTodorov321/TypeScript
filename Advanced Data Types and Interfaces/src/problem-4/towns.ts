interface Town {
    town: string;
    latitude: number;
    longitude: number;
};

const getTowns = (townsInfo: string[]): Town[] => {
    const towns: Town[] = [];

    for (let index: number = 0; index < townsInfo.length; index++) {
        const townInfo: string[] = townsInfo[index].split(" | ");

        const townName: string = townInfo[0];
        const latitude: number = Number(Number(townInfo[1]).toFixed(2));
        const longitude: number = Number(Number(townInfo[2]).toFixed(2));

        const town: Town = {
            town: townName,
            latitude,
            longitude,
        };
        towns.push(town);
    };

    return towns;
};