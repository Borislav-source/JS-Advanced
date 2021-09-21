function magic(givenMatrix) {
    let condition = 'true';
    first_row_sum = givenMatrix[0].reduce((a, b) =>a+b,0);
    for (let row of givenMatrix) {
        if (first_row_sum !== row.reduce((i, k)=> i+k)) {
            condition = 'false'; 
        }
    }
    var colSum = givenMatrix.reduce((a, b) => a.map((x, i) => x + b[i]));
    colSum.forEach(sum => {
        if (sum !== first_row_sum){
            condition = 'false';
        }   
    })
    console.log(condition);
}

magic([[4, 6, 5], [6, 5, 4], [5, 5, 5]])