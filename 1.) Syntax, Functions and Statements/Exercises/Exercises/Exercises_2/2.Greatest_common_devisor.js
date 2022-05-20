function solve(num1, num2) {
    if (num1 % num2 == 0) {
        console.log(num2)
        return
    } else {
        for (i=num2; i>0; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                console.log(i)
                return
            }
        }
    }
}

solve(15, 5);
solve(2154, 458);