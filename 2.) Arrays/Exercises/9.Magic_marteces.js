function magic(givenMatrix) {
    first_row_sum = givenMatrix[0].reduce((a, b) =>a+b,0);
    for (let row of givenMatrix) {
        if (first_row_sum !== row.reduce((i, k)=> i+k)) {
            console.log('false'); return;
        }
    }
}

magic([[4, 5, 5], [6, 5, 4], [5, 5, 5]])