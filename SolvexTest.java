import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class SolvexTest {

	private static Solvex s;static int x, n;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		s=new Solvex();
		 n=3;x=2;
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
	public void testSolve() {
		int res = s.solve(x,n);
		assertEquals(8,res);
		
	}

}
