import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash_table'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe.skip('HashTable', () => {
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put(key, value)', () => {
    it('adds a key value pair to the hash table, deal with collisions using chaining', () => {
      const ht = new HashTable
      ht.put("name", "Zanzibar")
      ht.put("name", "Billy")

      expect(ht).to.eql( { data: { "name": "Zanzibar" }, next: { data: { "name": "Billy" }, next: null } } )
    })
  })

  context('get(key)', () => {
    it('returns the data associated with key', () => {
      const ht = new HashTable
      ht.put("name", "Billy")
      ht.put("name", "Bob")

      expect(ht.get("name")).to.eql(["Billy", "Bob"])
    })
  })

  context('contains(key)', () => {
    it('returns true if the hash table contains the key', () => {
      const ht = new HashTable
      ht.put("name", "Billy")
      ht.put("name", "Bob")

      expect(ht.contains("name")).to.be.true
    })

    it('returns false if the hash table does not contains the key', () => {
      const ht = new HashTable
      ht.put("name", "Billy")
      ht.put("name", "Bob")

      expect(ht.contains("poop")).to.be.false
    })
  })

  context.skip('iterate(key, value)', () => {
    it('takes a callback function and passes it to each key and value in sequence', () => {
      const ht = new HashTable
      ht.put("name", "Billy")
      ht.put("name", "Bob")

      expect(ht.iterate("name", "Bob")).to.be.null
    })
  })

  context('remove(key)', () => {
    it('removes a key value pair by key', () => {
    const ht = new HashTable
    ht.put("name", "Billy")
    ht.put("name", "Bob")
    ht.remove("name")

    expect(ht).to.be.empty
    })
  })

  context('size()', () => {
    it('returns the number of key value pairs in the hash table', () => {
    const ht = new HashTable
    ht.put("name", "Billy")
    ht.put("name", "Bob")

    expect(ht.size()).to.eql(2)
    })
  })

  context("hash(key)", () => {
    it('generates a hash for the key', () => {
      const ht = new HashTable
      ht.hash("name")

      expect(ht).to.eql({"name": null})
    })
  })
})
