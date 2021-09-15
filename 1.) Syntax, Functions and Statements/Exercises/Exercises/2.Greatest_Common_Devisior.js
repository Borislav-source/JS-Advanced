function solve(num1, num2) {
    let mylist = [num1, num2]
    let biggest_del;
    let max_num = Math.max(...mylist)
    let min_num = Math.min(...mylist)
    if (max_num % min_num == 0) {
        biggest_del = min_num;
    }
    else {
        for (i = max_num; i >= 0; i--) {
            if (max_num % i == 0 && min_num % i == 0) {
                biggest_del = i; break;
            }
        }
    }
    console.log(biggest_del)
}

solve(15, 5)
solve(2154, 458)