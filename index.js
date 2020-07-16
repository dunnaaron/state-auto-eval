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
    const seats = new Array(100).fill(false)

    passenger.forEach((passenger, index) => {
        if (passenger.id === 0) {
            const randomSeat = Math.floor(Math.random() * Math.floor(100))

            passenger.occupiedSeat = randomSeat
            seats
        }
    })

    
    return
}

module.exports = { airlineSeats, createPassengers }