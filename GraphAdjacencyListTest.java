import static org.junit.Assert.*;

import java.util.LinkedList;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class GraphAdjacencyListTest {

    private static GraphAdjacencyList g;static int vertice;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		vertice = 5;
		g = new GraphAdjacencyList(vertice);
		g.addEdge(0, 1); 
        g.addEdge(0, 2); 
        g.addEdge(1, 2); 
        g.addEdge(2, 0); 
        g.addEdge(2, 3); 
        g.addEdge(3, 3);
		
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		
       
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testDepthFirstSearch() {
		
		g.depthFirstSearch(GraphAdjacencyList.adjarraylist, 2);
	}

	@Test
	public void testBFS() {
		g.BFS(2, vertice);
	}

	@Test
	public void testFindPath() {
		g.findPath(vertice, 0, 3);
	}

}
