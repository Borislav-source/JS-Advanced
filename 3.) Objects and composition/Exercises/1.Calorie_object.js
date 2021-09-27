function compose(givenArr) {
    let myObject = {};

    for(let i = 0; i < (givenArr.length); i += 2) {
        let name = givenArr[i];
        calorie = givenArr[i+1];
        myObject[name] = Number(calorie);
    }
    console.log(myObject);
}

compose(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);