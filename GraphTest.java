import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class GraphTest {

	private static Graph g1;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		g1 = new Graph(6);
        boolean visited[] = new boolean[5];
        g1.addEdgeUndirected(0, 1); 
        g1.addEdgeUndirected(1, 2); 
        g1.addEdgeUndirected(2, 0); 
        g1.addEdgeUndirected(3, 4); 
        g1.addEdgeUndirected(4, 5);
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
	public void testIsCyclicUndirected() {
		boolean f=g1.isCyclicUndirected();
		assertEquals(true,f);
	}

}
