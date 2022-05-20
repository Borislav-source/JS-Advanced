function validityChecker (x1, y1, x2, y2) {
    let first_check = (x1 - y1)*(x1 - y1)
    let second_check = (x2 - y2)*(x2 - y2)
    let x = (x2 - x1)*(x2 - x1)
    let y = (y2 - y1)*(y2 - y1)
    let result = Math.sqrt(x + y)


    if (Number.isInteger(Math.sqrt(first_check))){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(Math.sqrt(second_check))){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(result)) {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is invalid`)
    }
}

validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)
