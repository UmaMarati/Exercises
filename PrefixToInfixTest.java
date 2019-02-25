import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class PrefixToInfixTest {

	private static PrefixToInfix p;static String str;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		p = new PrefixToInfix();
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		str = "/*+ab-cde";
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testDisplay() {
		p.display(str);
	}

}
