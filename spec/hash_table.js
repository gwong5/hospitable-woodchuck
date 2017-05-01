import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash_table'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myHashTable = new HashTable()

      expect(() => myHashTable.push('foo'))
        .to.alter(() => myHashTable.length(), { from: 0, to: 1 })
    })
  })
})