function solve(steps, footprint, speed) {
    let distance = steps * footprint;
    let rests_count = distance / 500;
    hours = 00;
    minutes = Math.floor((distance / (speed*16.667)) + Math.floor(rests_count));
    seconds = Math.floor(rests_count* 10);
    console.log(`00:${minutes}:${seconds}`);
};

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);