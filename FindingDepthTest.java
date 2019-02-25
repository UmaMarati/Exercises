import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class FindingDepthTest {

	private static FindingDepth fd;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
      fd = new FindingDepth(5);
		
		fd.addEdge(0, 1);
		fd.addEdge(0, 3);
		fd.addEdge(1, 2);
		fd.addEdge(1, 3);
		fd.addEdge(1, 4);
		fd.addEdge(2, 4);
		fd.addEdge(3, 4);
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
	public void testFindDepth() {
		int res=fd.findDepth(0, 4);
		assertEquals(4,res);
	}

}
