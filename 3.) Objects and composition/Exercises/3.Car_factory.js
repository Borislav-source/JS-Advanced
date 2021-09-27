function modify(car) {
    let customer_car = { model: car.model, }
    // Select an engine
    let the_engine = {}
    if (car.power <= 90) {
        the_engine.power = 90;
        the_engine.volume = 1800;
    } else if (car.power <= 120) {
        the_engine.power = 120;
        the_engine.volume = 2400;
    } else {
        the_engine.power = 200;
        the_engine.volume = 3500;
    }
    customer_car.engine = the_engine;
    // Configure carriage
    let     carriage = {
        type: car.carriage,
        color: car.color
    }
    customer_car.carriage = carriage;

    // Configure wheels
    if (car.wheelsize % 2 == 0) {
        car.wheelsize -= 1;
    }
    customer_car.wheels = Array(4).fill(car.wheelsize)

    return customer_car
}


my_car = modify({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)

console.log(my_car.carriage.type)