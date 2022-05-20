function solve(y, m, d) {
    let yestereday = new Date(y, m, d);

    yestereday.setDate(yestereday.getDate() - 1);


    console.log(`${yestereday.getFullYear()}-${yestereday.getMonth()}-${yestereday.getDate()}`);
}

//solve(2016, 10, 1);





























function solve2(y, m, d) {
    let yestereday = new Date(y, m, d);

    yestereday.setDate(yestereday.getDate() -1);

    console.log(`${yestereday.getFullYear()}-${yestereday.getMonth()}-${yestereday.getDate()}`);
}

solve2(2016, 10, 1);