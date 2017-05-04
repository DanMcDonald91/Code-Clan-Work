import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class VehicleTest {
  Vehicle vehicle;
  Car car;
  Motorbike motorbike;

  @Before
  public void before(){
    vehicle = new Vehicle();
    car = new Car();
    motorbike = new Motorbike();
  }

  @Test
  public void testCarHasFourWheels(){
    assertEquals(4, car.getNumWheels());
  }

  @Test
  public void testMotorbikeHasTwoWheels(){
    assertEquals(2, motorbike.getNumWheels());
  }

@Test public void testVehicleStartingEngine(){
  assertEquals("Vrmmm", vehicle.startEngine());

}
  @Test
  public void testCarStartEngine(){
    assertEquals("Vrmm! I'm a car");
  }
}