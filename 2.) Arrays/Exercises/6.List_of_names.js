function names(givenArr) {
    givenArr.sort((a, b) => a.localeCompare(b))
    givenArr.forEach(name => {
        console.log(`${givenArr.indexOf(name)+1}.${name}`)
    })
}

names(['John', 'Bob', 'Christina', 'Ema'])