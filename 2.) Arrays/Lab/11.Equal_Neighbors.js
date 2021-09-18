function neghbors(givenMatrix) {
    let checker = (myArray, range) => ( 
        range => (
            myArray.includes(range)) 
        )
    let pairs = 0;
    let temp;
    for (let row = 0; row < givenMatrix.length; row++) {
        for (let col = 0; col < givenMatrix[row].length; col++) {
            temp = givenMatrix[row][col];
            if (checker(givenMatrix, row-1)) {
                console.log('Yes')
            }
            else {
                console.log('No')
            }
        }
    }
}

neghbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)