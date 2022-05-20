function time_tracker(steps, footprint, speed) {
    //every 500m the student takes a rest of 1 minute
    let distance = (steps * footprint) / 1000
    let breakes_count = Math.floor( distance / 0.5 )
    let time = distance / speed
    


}