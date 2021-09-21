function order(givenArr) {
    givenArr.sort()
    givenArr.sort(function(a, b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
    });
    console.log(givenArr.join('\n'));
}

order(['gamma', 'alpha', 'beta']);
