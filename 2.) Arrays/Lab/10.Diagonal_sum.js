function diagonal(givenMatrix) {
    let main_diagonal = 0;
    let secondary_diagonal = 0;
    for (let row = 0; row < givenMatrix.length; row++) {
        for (let col = givenMatrix[row].length - (row+1); col >= 0; col--) {
            main_diagonal += givenMatrix[row][row];
            secondary_diagonal += givenMatrix[row][col];
            break;
        }
    }
    console.log(main_diagonal, secondary_diagonal);
}

diagonal([[20, 40],
    [10, 60]]
   )