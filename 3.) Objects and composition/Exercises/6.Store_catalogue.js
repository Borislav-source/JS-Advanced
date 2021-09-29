function doesnt_contain(givenArr, letter) {
    if (givenArr.includes(letter)) {
        return false;
    } else {
        return true;
    }
};

function group(input) {
    let products = [];
    input.forEach(element => {
        [productName, price] = element.split(" : ");
        products.push({
            name: productName,
            price: Number(price)
        })
    })
    products.sort((a, b) => a.name.localeCompare(b.name));

    let doneLetters = [];
    let letter = products[0].name[0];

    for (product of products) {
        if (doesnt_contain(doneLetters, product.name[0])) {
            letter = product.name[0];
            doneLetters.push(letter);
            console.log(`${letter}`);
            products.forEach(pr => {
                if (pr.name[0] == letter) {
                    console.log(` ${pr.name}: ${pr.price}`)
                }
            })
        }
    }
};

group(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'])