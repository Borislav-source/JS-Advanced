function regitster(input) {
    let result = [];
    for (let iterArray of input) {
        [heroName, heroLevel, heroItems] = iterArray.split(" / ")
        result.push({
            name: heroName,
            level: Number(heroLevel),
            items: heroItems ? heroItems.split(', ') : []
        })
    }
    console.log(JSON.stringify(result));
}

regitster(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])