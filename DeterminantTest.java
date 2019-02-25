import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class DeterminantTest {

	private static Determinant d;final static int n=4;static int matrix[][];
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		matrix = new int[][]{{1, 0, 2, -1},{3, 0, 0, 5},{2, 1, 4, -3},{1, 0, 5, 0}};
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testDeterminantOfMatrix() {
		int res = d.determinantOfMatrix(matrix,n);
		assertEquals(30,res);
	}

}
