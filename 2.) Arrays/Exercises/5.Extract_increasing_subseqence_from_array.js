function extract(givenArr) {
    let resultArr = [givenArr[0]];
    givenArr.forEach(num => {
        if (num > resultArr[resultArr.length - 1]) {
            resultArr.push(num);
        }
    })
    return resultArr;
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24])