function odds(givenArr) {
    const myArr = [];
    for (i = 1; i < givenArr.length; i += 2) {
        myArr.push(givenArr[i]*2);
    }
    return myArr.reverse().join(' ')
}

console.log(odds([10, 15, 20, 25]))