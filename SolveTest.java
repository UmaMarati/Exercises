import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class SolveTest {

	private static  Solve st;static int n;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		st=new Solve();n=5;
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
	public void testSolvea() {
		int res = st.solvea(n);
		assertEquals(1,res);
	
	}

}
