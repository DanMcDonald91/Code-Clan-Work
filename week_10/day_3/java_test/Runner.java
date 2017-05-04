public class Runner{

  public static void main(String[] args) {
    ThreadExample r1 = new ThreadExample();
    Thread t1 = new Thread(r1);
    t1.start();
  }
}