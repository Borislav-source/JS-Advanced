function manipulations(givenArr) {
    let myArr = [];
    let resultArr = [];
    let initial_number = 0;
    givenArr.forEach(command => {
        initial_number += 1
        switch (command) {
            case 'add': myArr.push(initial_number); break;
            case 'remove': myArr.pop(); break;
        }
    })
    if (myArr.length > 0){
    console.log(myArr.join('\n'));}
    else {console.log('Empty')}
}

manipulations(['add', 'add', 'remove', 'add', 'add'])
manipulations(['remove', 'remove', 'remove'])