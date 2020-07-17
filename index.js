const createPassengers = count => {
    const passengers = new Array(count).fill({})

    return passengers.map((passenger, index) => (
        {
            id: index,
            assignedSeat: index,
            occupiedSeat: null
        }
    ))
}

const occupySeat = (availableSeats, seat) => {
    const index = availableSeats.indexOf(seat)

    availableSeats.splice(index, 1)
}

const occupyRandomSeat = (availableSeats, passenger) => {
    const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)]

    passenger.occupiedSeat = randomSeat
    occupySeat(availableSeats, randomSeat)
}

const seatPassengers = (passengers, availableSeats) => (
    passengers.map(passenger => {
        let assignedSeat = passenger.assignedSeat

        if (!passenger.id || !availableSeats.includes(assignedSeat)) {
            occupyRandomSeat(availableSeats, passenger)
        } else {
            passenger.occupiedSeat = assignedSeat
            occupySeat(availableSeats, assignedSeat)
        }

        return passenger
    })
)

const checkLastPassenger = passenger => passenger.occupiedSeat === passenger.assignedSeat

const message = passenger => {
    return checkLastPassenger(passenger) 
    ? 
    `The last passenger was able to sit in their assigned seat, seat ${passenger.assignedSeat}.`
    :
    `The last passenger was not able to sit in their assigned seat, seat ${passenger.assignedSeat}, but instead had to sit in seat ${passenger.occupiedSeat}.`
}

const airlineSeats = () => {
    const passengers = createPassengers(100)
    const availableSeats = [...Array(100).keys()]

    const seatedPassengers = seatPassengers(passengers, availableSeats)
    const lastPassenger = seatedPassengers[seatedPassengers.length - 1]

    console.log(message(lastPassenger))

    return checkLastPassenger(lastPassenger)
}

airlineSeats()

module.exports = { airlineSeats, createPassengers, occupySeat, occupyRandomSeat, seatPassengers, checkLastPassenger }