function smallest(givenArr) {
    const min = Math.min(...givenArr);
    const index = givenArr.indexOf(min);
    givenArr.splice(index, 1);
    const min2 = Math.min(...givenArr);
    console.log(`${min} ${min2}`)

}


smallest([4, 6, 2, 3])
smallest([30, 15, 50, 5])
smallest([3, 0, 10, 4, 7, 3])