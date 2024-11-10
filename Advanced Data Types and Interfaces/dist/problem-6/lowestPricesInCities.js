function getLowestPrice(productsInput) {
    const products = [];
    for (let index = 0; index < productsInput.length; index++) {
        const productInfo = productsInput[index].split(" | ");
        const town = productInfo[0];
        const name = productInfo[1];
        const price = Number(productInfo[2]);
        const productToFind = products.find(product => product.name === name);
        if (!productToFind) {
            const product = {
                name,
                town,
                price,
            };
            products.push(product);
        }
        else {
            if (productToFind.price > price) {
                productToFind.price = price;
                productToFind.town = town;
            }
            ;
        }
        ;
    }
    ;
    return products;
}
;
const products = getLowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
products.forEach((product) => {
    console.log(`${product.name} -> ${product.price} (${product.town})`);
});
//# sourceMappingURL=lowestPricesInCities.js.map