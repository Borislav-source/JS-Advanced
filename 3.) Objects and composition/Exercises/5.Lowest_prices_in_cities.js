function evaluate(input) {
    let result = [];
    for (iterator of input) {
        [townName, productName, productPrice] = iterator.split(" | ");
        result.push({
            townName,
            productName,
            productPrice
        })
    }
    console.log(JSON.stringify(result));
};

evaluate(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])