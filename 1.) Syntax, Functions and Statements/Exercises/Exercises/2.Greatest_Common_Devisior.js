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

//solve(15, 5)
//solve(2154, 458)


function solve2(num1, num2) {
    let mylist = [num1, num2];
    let biggest_del;
    let bigger_num = Math.max(...mylist);
    let smaller_num = Math.min(...mylist);

    if (bigger_num % smaller_num == 0) {
        biggest_del = smaller_num;
    } else {
        for (i = smaller_num; i >= 0; i--) {
            if (bigger_num % i == 0 && smaller_num % i == 0){
                biggest_del = i;
                break;
            }
        }
    }
    console.log(biggest_del);
}

solve2(15, 5);
solve2(2154, 458);