function solve(givenArr) {
    const myArr = [];
    for(let i of givenArr) {
        if (i < 0) {
            myArr.unshift(i)
        }
        else {
            myArr.push(i)
        }
    }
    console.log(myArr)
}

solve([2, -1, 0])
solve([3, -2, 0, -1])