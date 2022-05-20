function compare(num) {
    let length_of_num = num.toString().length
    let condition = true
    let sum = 0
    let first_number = num % 10
    for (i=0; i < length_of_num; i++) {
        let current_num = num % 10
        num = Math.floor(num / 10)
        if ( first_number != current_num ){
            condition = false
        }
        sum += current_num
    }

    console.log(condition)
    console.log(sum)
}

compare(2222223);
