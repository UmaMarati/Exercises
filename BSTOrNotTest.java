import static org.junit.Assert.*;

import java.util.Scanner;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class BSTOrNotTest {

	private static BSTOrNot bs;static Node root;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		bs=new BSTOrNot();
		class Node{
		int data;
		Node left = null, right = null;

		Node(int data) {
			this.data = data;
		}
		}
		 root=null;
		
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
	public void testIsBSTNode() {
	   bs.isBST(root);
	}

}
