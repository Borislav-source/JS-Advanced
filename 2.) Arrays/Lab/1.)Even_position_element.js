function solve(myArr) {
    let result = [];
    for (i = 0; i < myArr.length; i++) {
        if (i % 2 == 0) {
            result.push(myArr[i]);
        }
    }


    console.log(result.join(' '));
}

solve(['1', '2', '3'])