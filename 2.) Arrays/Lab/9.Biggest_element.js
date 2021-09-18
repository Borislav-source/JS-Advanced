function biggest(givenMatrix) {
    let biggest_number = givenMatrix[0][0];
    for (let row = 0; row < givenMatrix.length; row++) {
        for (col=0; col < givenMatrix[row].length; col++) {
            if (givenMatrix[row][col] > biggest_number) {
                biggest_number = givenMatrix[row][col];
            }
        }
    }
    return biggest_number;
}

console.log(biggest([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));