function modify(worker) {
    if (worker.dizziness == true) {
        hydratation = (worker.weight * 0.1) * worker.experience
        worker.levelOfHydrated = hydratation
    }
    return worker;
}

modify({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)