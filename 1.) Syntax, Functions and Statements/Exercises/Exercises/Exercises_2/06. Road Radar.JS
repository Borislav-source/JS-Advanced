function roadRadar (speed, area) {
    let difference = 0
    let status
    let areas = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    for (key in areas) {
        if (area == key) {
            if (speed > areas[key]) {
                difference = speed - areas[key]
                if (difference <= 20){
                    status = 'speeding'
                } else if (difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[key]} - ${status}`)
            } else {
                console.log(`Driving ${speed} km/h in a ${areas[key]} zone`)
            }
            return
        }
    }}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(200, 'motorway')

