function test_same_digit(num) {
    var first = num % 10;
    let bool = true;
    let sum = 0;
    while (num) {
        digit = num % 10;
        sum += digit
        if (digit !== first) {
            bool = false;
        }
        num = Math.floor(num / 10);
    }
    console.log(bool);
    console.log(sum)
}

test_same_digit(1234);
test_same_digit(1111);
test_same_digit(22222222);