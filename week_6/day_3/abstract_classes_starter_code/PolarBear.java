public class PolarBear extends Bear implements Gatherer {
  
  public String gatherFood(){
    return  super.gatherFood() + "Breaking the ice";
  }

  public String hibernate() {
  return "Finding nice igloo to hibernate in";
}
  
}