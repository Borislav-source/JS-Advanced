function money_calculate(fruit, weight, money) {
    weight /= 1000
    let price = money * weight
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

money_calculate('orange', '1.80', '2500')