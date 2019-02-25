import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class FibonacciIRTest {

	private static FibonacciIR fib;static int a=0,b=1,n=3;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		fib=new FibonacciIR();
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
	public void testItFibo() {
		int res=fib.itFibo(n);
		assertEquals(2,res);
	}

	@Test
	public void testReFibo() {
		int res=fib.reFibo(n);
		assertEquals(2,res);
	}

}
