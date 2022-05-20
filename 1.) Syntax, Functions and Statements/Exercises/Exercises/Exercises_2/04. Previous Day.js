function previous_day(year, month, day) {
    let d = new Date(year, month, day);
    d.setDate(d.getDate() - 1);
    console.log(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`)
}

previous_day(2016, 9, 30)
previous_day(2016, 10, 1)
