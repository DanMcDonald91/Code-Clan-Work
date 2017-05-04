import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class AnimalTest {
  Animal animal;
  Mamal mamal;
  Human human;
  Chimpanzee chimpanzee;

  @Before
  public void before(){
    animal = new Animal();
    mamal = new Mamal();
    human = new Human();
    chimpanzee = new Chimpanzee();
  }

  @Test
  public void testAnimalCanEat(){
    assertEquals("Time For Lunch", animal.eat());
  }

  @Test
  public void testAnimalCanBreathe(){
    assertEquals
  }
}