function sum(givenArr) {
    first = parseInt(givenArr[0]);
    last = parseInt(givenArr[givenArr.length-1]);
    result = first + last;
    console.log(result);
}

sum(['20', '30', '40'])
sum(['20'])