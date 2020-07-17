const { expect, assert } = require('chai')
const sinon = require('sinon')
const { 
    airlineSeats, 
    createPassengers, 
    occupySeat, 
    occupyRandomSeat, 
    seatPassengers 
} = require('./index')

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

describe('seatPassengers', () => {
    it('returns array of passengers with occupied seats', () => {
        const passengers = [
            {id: 1, occupiedSeat: 0, assignedSeat: 1},
            {id: 2, occupiedSeat: 0, assignedSeat: 2},
            {id: 3, occupiedSeat: 0, assignedSeat: 3},
            {id: 4, occupiedSeat: 0, assignedSeat: 4},
            {id: 5, occupiedSeat: 0, assignedSeat: 5}
        ]
        const availableSeats = [...Array(5).keys()].map(seat => seat + 1)
        
        const result = seatPassengers(passengers, availableSeats)

        expect(result.length).to.equal(5)
        assert.isAbove(result[0].occupiedSeat, 0)
    })
})