const getHeroes = (heorsInfo) => {
    let heroes = [];
    heorsInfo.forEach((heroRow) => {
        const heroInfo = heroRow.split(" / ");
        const name = heroInfo[0];
        const level = Number(heroInfo[1]);
        let items;
        if (heroInfo[2]) {
            items = heroInfo[2].split(", ");
        }
        ;
        const hero = {
            name,
            level,
            items,
        };
        heroes.push(hero);
    });
    return heroes.sort((a, b) => a.level - b.level);
};
const heroes = getHeroes([
    'Isacc / 25',
    'Derek / 12',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
heroes.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`Items => ${hero.items ? hero.items.join(", ") : ''}`);
});
//# sourceMappingURL=inventory.js.map