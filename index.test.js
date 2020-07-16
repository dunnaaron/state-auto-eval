const { expect } = require('chai')
const { airlineSeats, createPassengers } = require('./index')

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
        console.log('PASSENGERS: ', passengers)

        expect(passengers.length).to.equal(100)
        expect(passengers[0]).to.deep.equal({
            id: 0,
            assignedSeat: 0,
            occupiedSeat: null
        })
    })
})