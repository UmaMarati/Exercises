import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class ShortestPathTest {

	private static ShortestPath sp;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	 sp = new ShortestPath(5);
		sp.addEdge(0, 1);
		sp.addEdge(0, 3);
		sp.addEdge(1, 2);
		sp.addEdge(1, 3);
		sp.addEdge(1, 4);
		sp.addEdge(2, 4);
		sp.addEdge(3, 4);
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
	public void testFindPath() {
		boolean f=sp.findPath(5,0,0);
		assertEquals(false,f);
	}

}
