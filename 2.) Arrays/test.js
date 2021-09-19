givenArr = [1, 2, 3];
let copy = [];

givenArr.forEach(element => {
    copy.push(element);
});

console.log(copy)

let found = givenArr.find(function (element) {
    return element > 0;
})

console.log(found)

let arr = [[4, 5, 6],
[6, 5, 4],
[5, 5, 5]];

arr.forEach(printRow);

function printRow(row){

console.log(row);

row.forEach(printNumber);

}

function printNumber(num){

    console.log(num);
    
    };