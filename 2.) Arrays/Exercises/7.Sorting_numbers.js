function order(givenArr) {
    let resultArr = [];
    givenArr = givenArr.sort((a, b) => a - b);
    while (givenArr.length > 0) {
        min_num = givenArr.shift();
        max_num = givenArr.pop();
        resultArr.push(min_num)
        resultArr.push(max_num)
    }
    return resultArr
}

console.log(order([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));