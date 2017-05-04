import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;


public class TestVendingMachine{

  VendingMachine vendingmachine;


@Test
  public void TestBalance(){
  assertEquals(0,vendingmachine.getBalance());
    
  }


  @Test
  public void TestInsert10p(){
    assertEquals(10,vendingmachine.getBalance());
  }

}