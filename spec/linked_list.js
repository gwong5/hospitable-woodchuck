import LinkedList from '../src/linked_list'
import Node from '../src/node'
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'

describe('LinkedList', () => {
  it('is a function', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      expect(linkedList.getHeadNode()).to.eql( { data: 'beans', next: { data: 'greens', next: { data: 'potatoes', next: { data: 'tomatoes', next: null } } } } )
    })

    it('returns an instance of a Node', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      expect(linkedList.getHeadNode()).to.be.an.instanceOf(Node)
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.getTailNode()).to.eql({ data: 'tomatoes', next: null })
    })

    it('returns an instance of a Node', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.getTailNode()).to.be.an.instanceOf(Node)
    })
  })

  context('contains(data)', () => {
    it('returns true if list contains the provided data', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.contains('greens')).to.be.true
    })

    it('returns false if list doesn\'t contain the provided data', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.contains('bananas')).to.be.false
    })
  })
  
  context('find(data)', () => {
    it('returns the first node containing the provided data', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.find('tomatoes')).to.eql({ data: 'tomatoes', next: { data: 'tomatoes', next: null } })
    })

    it('returns -1 if node containing data is not found', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.find('bananas')).to.eql(-1)
    })
  })

  context('insert(data)', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')

      expect(linkedList).to.eql( { _size: 3, head: { data: 'beans', next: { data: 'greens', next: { data: 'potatoes', next: null } } } } )
    })

    it('size of list increases after item is added', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')

      expect(linkedList.size()).to.eql(3)
    })
  })

  context('insertFirst(data)', () => {
    it('inserts a node (with the provided data) to the first node', () => {
      const linkedList = new LinkedList
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.insertFirst('beans')

      expect(linkedList.getHeadNode()).to.eql( { data: 'beans', next: { data: 'greens', next: { data: 'potatoes', next: { data: 'tomatoes', next: null } } } } )
    })
  })

  context('insertBefore(node1, node2)', () => {
    it('inserts a node (with the data node2) before node1', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.insertBefore('potatoes','greens')

      expect(linkedList.head.next).to.eql({ data: 'greens', next: { data: 'potatoes', next: { data: 'tomatoes', next: null } } })
    })

    it('inserts a node (with the data node2) before node1 in a list of only one node', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insertBefore('beans','tomatoes')

      expect(linkedList.head).to.eql({ data: 'tomatoes', next: { data: 'beans', next: null} })
    })

    it('returns node if node1 does not exist within the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.insertBefore('bananas','greens')).to.be.null
    })
  })

  context('insertAfter(node1, node2)', () => {
    it('inserts a node (with the data node2) after node1', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.insertAfter('potatoes','tomatoes')
      console.log('insertafter: ', linkedList.head.next.next.next)

      expect(linkedList.head.next.next).to.eql({ data: 'potatoes', next: { data: 'tomatoes', next: { data: 'tomatoes', next: null} } })
    })

    it('inserts a node (with the data node2) after node1 in a list of only one node', () => {
      const linkedList = new LinkedList
      linkedList.insert('tomatoes')
      linkedList.insertAfter('tomatoes','tomatoes')

      expect(linkedList.head).to.eql({ data: 'tomatoes', next: { data: 'tomatoes', next: null} })
    })

      it('returns node if node1 does not exist within the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.insertAfter('bananas','greens')).to.be.null
    })
  })

  context('remove()', () => {
    it('removes the tail node from the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.remove()

      expect(linkedList.getTailNode()).to.eql({ data: 'potatoes', next: null })
    })

    it('removes the tail node from the list of two items', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.remove()

      expect(linkedList.getTailNode()).to.eql({ data: 'beans', next: null })
    })

    it('removes the tail node from the list of one item', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.remove()

      expect(linkedList.getTailNode()).to.be.null
    })
  })

  context('removeFirst()', () => {
    it('removes the head node from the list', () => {
      const linkedList = new LinkedList
      linkedList.insert('greens')
      linkedList.insert('beans')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.removeFirst()

      expect(linkedList.getHeadNode()).to.eql( { data: 'beans', next: { data: 'potatoes', next: { data: 'tomatoes', next: null } } } )
    })
  })

  context('isEmpty', () => {
    it('returns true if the list is empty', () => {
      const linkedList = new LinkedList

      expect(linkedList.isEmpty()).to.be.true
    })

    it('returns false if the list is not empty', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.isEmpty()).to.be.false
    })
  })

  context('size()', () => {
    it('returns the size of the list (number of nodes)', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')

      expect(linkedList.size()).to.eql(4)
    })
  })

  context('clear()', () => {
    it('clears the list of all nodes/data', () => {
      const linkedList = new LinkedList
      linkedList.insert('beans')
      linkedList.insert('greens')
      linkedList.insert('potatoes')
      linkedList.insert('tomatoes')
      linkedList.clear()

      expect(linkedList).to.eql({ _size: 0, head: null })
    })
  })
})