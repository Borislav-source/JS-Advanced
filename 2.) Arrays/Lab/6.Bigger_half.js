function solve(givenArr) {
    givenArr.sort();
    const index = Math.floor(givenArr.length / 2);
    return givenArr.slice(index)
}

solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])