function printing(givenArr, n) {
    let myArr = [];
    for (i=0; i<givenArr.length; i += n) {
        myArr.push(givenArr[i]);
    }
    return myArr;
}
        

console.log(printing(['5', '20', '31', '4', '20'], 2));