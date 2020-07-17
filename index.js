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

const occupySeat = (availableSeats, seat) => {
    const index = availableSeats.indexOf(seat)

    availableSeats.splice(index, 1)
}

const occupyRandomSeat = (availableSeats, passenger) => {
    const randomSeat = availableSeats[Math.floor(Math.random() * 100)]

    passenger.occupiedSeat = randomSeat
    occupySeat(availableSeats, randomSeat)
}

const seatPassengers = (passengers, availableSeats) => {
    return passengers.map((passenger, index) => {
        let assignedSeat = passenger.assignedSeat

        if (!passenger.id || !availableSeats.includes(assignedSeat)) {
            occupyRandomSeat(availableSeats, passenger)
        } else {
            passenger.occupiedSeat = assignedSeat
            occupySeat(availableSeats, assignedSeat)
        }

        return passenger
    })
}

const airlineSeats = () => {
    const passengers = createPassengers()
    const availableSeats = [...Array(100).keys()]

    const seatedPassengers = seatPassengers(passengers, availableSeats)

    return
}

module.exports = { airlineSeats, createPassengers, occupySeat, occupyRandomSeat, seatPassengers }