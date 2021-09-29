function doesnt_contain(givenArr, obj) {
    if (givenArr.includes(obj)) {
        return false;
    } else {
        return true;
    }
};

function evaluate(input) {
    let allData = [];
    let result = [];
    for (iterator of input) {
        [townName, productName, productPrice] = iterator.split(" | ");
        productPrice = Number(productPrice)
        allData.push({
            townName,
            productName,
            productPrice
        })
    }

    let doneProducts = [];
    for (let obj of allData) {
        if (doesnt_contain(doneProducts, obj.productName)) {
            let product = obj.productName;
            let price = obj.productPrice;
            let town = obj.townName;

            doneProducts.push(product);


            allData.forEach = (element => {
                if (element.productName == product & element.productPrice < price) {
                    price = element.productPrice
                    town = element.townName;
                }
            })

            result.push({
                product,
                price,
                town
            })
        }
    }
        result.forEach (obj => {
            console.log(`${obj.product} -> ${obj.price} (${obj.town})`)
        })
    };

    evaluate(['Sample Town | Sample Product | 1000',

        'Sample Town | Orange | 2',

        'Sample Town | Peach | 1',

        'Sofia | Orange | 3',

        'Sofia | Peach | 2',

        'New York | Sample Product | 1000.1',

        'New York | Burger | 10'])