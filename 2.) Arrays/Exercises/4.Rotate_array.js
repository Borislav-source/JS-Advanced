function rotate(givenArr, n) {
    for (i = 0; i < n; i++) {
        current_el = givenArr.pop();
        givenArr.unshift(current_el);
    }
    console.log(givenArr.join(' '));
}

rotate(['1','2','3','4'], 2)