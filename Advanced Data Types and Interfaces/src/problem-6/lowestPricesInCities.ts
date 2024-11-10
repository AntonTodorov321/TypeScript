type Product = {
    name: string,
    price: number,
    town: string,
};

function getLowestPrice(productsInput: string[]): Product[] {
    const products: Product[] = [];

    for (let index: number = 0; index < productsInput.length; index++) {
        const productInfo: string[] = productsInput[index].split(" | ");
        const town: string = productInfo[0];
        const name: string = productInfo[1];
        const price: number = Number(productInfo[2]);

        const productToFind: Product | undefined =
            products.find(product => product.name === name);

        if (!productToFind) {
            const product: Product = {
                name,
                town,
                price,
            };

            products.push(product);
        } else {
            if (productToFind.price > price) {
                productToFind.price = price;
                productToFind.town = town;
            };
        };
    };

    return products;
};

const products = getLowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);

products.forEach((product: Product) => {
    console.log(`${product.name} -> ${product.price} (${product.town})`);
});
