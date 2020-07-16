const { expect } = require('chai')
const { helloWorld } = require('./index')

describe('helloWorld', () => {
    it('returns Hello World!', () => {
        expect(helloWorld()).to.equal('Hello World!')
    })
})