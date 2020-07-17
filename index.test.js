const { expect } = require('chai')
const sinon = require('sinon')
const { airlineSeats, createPassengers, occupySeat, occupyRandomSeat } = require('./index')

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

describe('occupy seats', () => {
    describe('occupyAssignedSeat', () => {
        it('removes occupied seats from the available seats array', () => {
            const availableSeats = [...Array(5).keys()]
            occupySeat(availableSeats, 3)
    
            expect(availableSeats.length).to.equal(4)
        })
    })

    describe('occupyRandomSeat', () => {
        it('removes random occupied seat and assigns it to passenger', () => {
            sinon.stub(Math, 'random').returns(.03)
            
            const availableSeats = [...Array(5).keys()]
            const passenger = {occupiedSeat: null}
            occupyRandomSeat(availableSeats, passenger)

            expect(availableSeats.length).to.equal(4)
            expect(passenger.occupiedSeat).to.equal(3)
        })
    })
})