import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class MSTTest {

	private static MST mst;static int graph[][];
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	
	 mst = new MST();}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		graph = new int[][] {{0, 2, 0, 6, 0}, {2, 0, 3, 8, 5}, {0, 3, 0, 0, 7}, {6, 8, 0, 0, 9}, {0, 5, 7, 9, 0}}; 

	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testPrimMST() {
		mst.primMST(graph);
	}

}
