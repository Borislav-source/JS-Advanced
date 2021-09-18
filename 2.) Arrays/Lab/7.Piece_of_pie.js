function pie(givenArr, target_flavor_one, target_flavor_two) {
    const starting_index = givenArr.indexOf(target_flavor_one);
    const ending_index = givenArr.indexOf(target_flavor_two) + 1;
    return givenArr.slice(starting_index, ending_index);
}

pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);