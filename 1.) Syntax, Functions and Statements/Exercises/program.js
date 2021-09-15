function echo(a, b, c) {
    let result;
    if (b < a > c) {
        result = a;
    } else if (a < b > c) {
        result = b;
    } else {
        result = c;
    }
    console.log('The largest number is ${result}')
}


echo(1, 2, 3);