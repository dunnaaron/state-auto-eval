const createPassengers = () => {
    const passengers = new Array(100).fill({})

    return passengers.map((passenger, index) => {
        return {
            id: index,
            assignedSeat: index,
            occupiedSeat: null
        }
    })
}

const airlineSeats = () => {
    const passengers = createPassengers()
    
    return
}

module.exports = { airlineSeats, createPassengers }