import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class TreeTest {

	private static Tree t;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		t = new Tree();
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
	public void testDeleteKey() {
		t.deleteKey(2);
	}

}
