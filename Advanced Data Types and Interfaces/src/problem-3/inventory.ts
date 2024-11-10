type Hero = {
    name: string;
    level: number;
    items?: string[];
};

const getHeroes = (heorsInfo: string[]): Hero[] => {
    let heroes: Hero[] = [];

    heorsInfo.forEach((heroRow: string) => {
        const heroInfo: string[] = heroRow.split(" / ");
        const name: string = heroInfo[0];
        const level: number = Number(heroInfo[1]);
        let items: string[];

        if (heroInfo[2]) {
            items = heroInfo[2].split(", ");
        };

        const hero: Hero = {
            name,
            level,
            items,
        };

        heroes.push(hero);
    });
    return heroes.sort((a, b) => a.level - b.level);
};

const heroes: Hero[] = getHeroes(
    [
        'Isacc / 25',
        'Derek / 12',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

heroes.forEach((hero: Hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`Items => ${hero.items ? hero.items.join(", ") : ''}`);
});