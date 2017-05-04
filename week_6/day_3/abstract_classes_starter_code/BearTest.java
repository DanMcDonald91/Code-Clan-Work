import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BearTest {
  PolarBear polarbear;
  GrizzlyBear grizzlybear;




  @Before 
  public void before() {
    polarbear = new PolarBear();
    grizzlybear = new GrizzlyBear();
  }

  @Test
  public void polarCanGatherFood(){
    assertEquals("Gathering Food:Breaking the ice", polarbear.gatherFood());
  }

  @Test
  public void grizzlyCanGatherFood(){
    assertEquals("Gathering Food:fishing in the river", grizzlybear.gatherFood());
  }

  @Test
  public void canHibernate(){
    assertEquals("Finding nice cave to sleep in", grizzlybear.hibernate());
    assertEquals("Finding nice igloo to hibernate in", polarbear.hibernate());
  }

  
}