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

//test_same_digit(1234);
//test_same_digit(1111);
//test_same_digit(22222222);



function solve2(num){
    let first_num = num % 10;
    let condition = true;
    let sum = 0;

    while (num) {
        next = num % 10;
        if (first_num !== next){
            condition == false;
        }
        sum += next
        num = Math.floor(num/10);
    }
    console.log(condition);
    console.log(sum);
}


solve2(2222222);