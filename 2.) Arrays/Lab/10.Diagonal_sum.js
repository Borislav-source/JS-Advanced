function diagonalSum(givenMatrix) {
    let main_diagonal = 0;
    let secondary_diagonal = 0;
    let first_index = 0;
    let last_index = givenMatrix[0].length - 1;
    givenMatrix.forEach(row => {
        main_diagonal += row[first_index++];
        secondary_diagonal += row[last_index--];
    })
    console.log(main_diagonal, secondary_diagonal);

    
    // let main_diagonal = 0;
    // let secondary_diagonal = 0;
    // for (let row = 0; row < givenMatrix.length; row++) {
    //     for (let col = givenMatrix[row].length - (row + 1); col >= 0; col--) {
    //         main_diagonal += givenMatrix[row][row];
    //         secondary_diagonal += givenMatrix[row][col];
    //         break;
    //     }
    // }
    // console.log(main_diagonal, secondary_diagonal);
}

diagonalSum([[20, 40],
[10, 60]]
)

// let main_diagonal = 0;
// givenMatrix.foreach(row => {
    let index = givenMatrix.indexOf(row);
//     main_diagonal += givenMatrix[index][index];
// })

// console.log(main_diagonal);