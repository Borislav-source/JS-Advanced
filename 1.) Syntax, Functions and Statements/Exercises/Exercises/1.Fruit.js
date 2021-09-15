function solve(fruit, weight, price) {
    let money;
    weight *= 0.001
    money = price * weight
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}


solve('oranges', 2500, 1.80)