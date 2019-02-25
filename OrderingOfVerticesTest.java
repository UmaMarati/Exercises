import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class OrderingOfVerticesTest {

	private static OrderingOfVertices ov;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	ov = new OrderingOfVertices(6);
	}
	

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		ov.addEdge(5, 2); 
		ov.addEdge(5, 0); 
		ov.addEdge(4, 0); 
		ov.addEdge(4, 1); 
		ov.addEdge(2, 3); 
		ov.addEdge(3, 1); 
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testVerticeSort() {
		ov.verticeSort();
	}

}
