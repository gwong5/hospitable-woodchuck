import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directed_graph'

describe.skip('DirectedGraph', () => {
  it('is a function', () => {
    expect(DirectedGraph).to.be.a('function')
  });

  context('addVertex(vertex)', () => {
    it('adds a vertex to the graph', () => {
      const diGraph = new DirectedGraph() 
      diGraph.addVertex('v1')

      expect(diGraph).to.be.not.empty
    });
  })

  context('hasVertex(vertex)', () => {
    it('returns true if the graph contains the vertex or false if not', () => {
      const diGraph = new DirectedGraph() 
      diGraph.addVertex('v1')

      expect(hasVertex('v1')).to.be.true
    });
  })

  context('addDirection(vertex1, vertex2)', () => {
    it('adds a diretion from vertex1 to vertex2', () => {
      const diGraph = new DirectedGraph() 
      diGraph.addVertex('v1')
      diGraph.addDirection('v1', 'v2')

      expect(diGraph).to.be.not.empty
    });
  })

  context('hasDirection(vertex1, vertex2)', () => {
    it('returns true if there\'s a direction from vertex1 to vertex2', () => {
      const diGraph = new DirectedGraph() 
      diGraph.addVertex('v1')
      diGraph.addDirection('v1', 'v2')

      expect(diGraph.hasDirection()).to.be.true
    });
  })

  context('visit(vertex, function)', () => {
    it('visits all the connected vertices in the graph starting with v1 and applies function on reached vertex', () => {
      const diGraph = new DirectedGraph() 
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addVertex('v3')
      diGraph.addVertex('v4')
      
      expect(diGraph.visit('v2', print)).to.print('v2')
    });
  })

  context('findPaths(vertex1, vertex2)', () => {
    it('returns an array of all the paths between two vertices', () => {
      
    });
  })

  context('removeDirection(vertex1, vertex2)', () => {
    it('removes an existing direction between vetex1 and vertex2', () => {
      
    });
  })

  context('getSeparatedVertices()', () => {
    it('returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex)', () => {
      
    });
  })

  context('removeVertex(vertex)', () => {
    it('removes an existing vertex and all its directions (the incoming and outgoing)', () => {
      
    });
  })

  context('count()', () => {
    it('returns the number of vertices in the graph', () => {
      
    });
  })
});