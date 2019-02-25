import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class StringLibraryTest {

	private static StringLibrary sl;static String str1,str2;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		sl=new StringLibrary();
		str1="haii";str2="haii";
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
	public void testStrcmp() {
		int res=sl.strcmp(str1,str2);
		assertEquals(1,res);
	}

}
