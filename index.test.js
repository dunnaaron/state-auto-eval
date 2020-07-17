const { expect } = require('chai')
const { airlineSeats, createPassengers, occupySeat } = require('./index')

describe('airline seats', () => {
    it('returns true if last passenger is in assigned seat', () => {
        const lastPassenger = airlineSeats()
        const result = lastPassenger.assignedSeat === lastPassenger.occupiedSeat

        expect(result).to.equal(true)
    })
})

describe('createPassengers', () => {
    it('builds passenger array with 100 passenger objects', () => {
        const passengers = createPassengers()

        expect(passengers.length).to.equal(100)
        expect(passengers[0]).to.deep.equal({
            id: 0,
            assignedSeat: 0,
            occupiedSeat: null
        })
    })
})

describe('occupySeats', () => {
    it('removes occupied seats from the available seats array', () => {
        const availableSeats = [...Array(5).keys()]
        occupySeat(availableSeats, 3)

        expect(availableSeats.length).to.equal(4)
    })
})