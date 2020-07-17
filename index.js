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

const airlineSeats = () => {
    const passengers = createPassengers()
    const availableSeats = [...Array(100).keys()]

    const seatedPassengers = passengers.map((passenger, index) => {
        let assignedSeat = passenger.assignedSeat
        
        passenger.id === 0 && occupyRandomSeat(availableSeats, passenger)
    })

    
    return
}

module.exports = { airlineSeats, createPassengers, occupySeat, occupyRandomSeat }