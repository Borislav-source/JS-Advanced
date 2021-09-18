function radar(speed, location) {
    let speed_limit;
    let difference;
    let status;
    switch (location) {
        case 'motorway': speed_limit = 130; break;
        case 'interstate': speed_limit = 90; break;
        case 'city': speed_limit = 50; break;
        case 'residential': speed_limit = 20; break;
    }
    if (speed > speed_limit) {
        difference = speed - speed_limit;
        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - ${status}`);
    }
    else {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`);
    }
}

radar(200, 'motorway');
radar(120, 'interstate');
radar(21, 'residential');
radar(40, 'city');