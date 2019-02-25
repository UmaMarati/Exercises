import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class TowersOfHanoiTest {

	private static TowersOfHanoi th;static int n;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		th = new TowersOfHanoi();
		n=3;
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
		th.solve(n, "X", "Y", "Z");
	}

}
