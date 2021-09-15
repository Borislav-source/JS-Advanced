function strlength(...params){
    let commonLen = 0;
    console.log(params);
    for (word of params){
        commonLen += word.length;
    }
    console.log(commonLen);
}

strlength('hello', 'chocolate');