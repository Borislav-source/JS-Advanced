function solve(array) {
    sum = array.reduce((partial_sum, a) => partial_sum + a,0)
    sum2 = array.reduce((partial_sum, a) => partial_sum + 1/a,0)
    num = array.join('')
    console.log(sum);
    console.log(sum2);
    console.log(num)
}

solve([1, 2, 3])