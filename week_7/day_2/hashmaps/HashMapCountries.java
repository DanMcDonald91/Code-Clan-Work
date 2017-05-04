import java.util.HashMap;

public class HashMapCountries {
  public static void main(String[] args) {
    HashMap<String, Countries> country = new HashMap<String, Countries>();

    Countries uk = new Countries("UK", 64100000);
    Countries germany = new Countries("Germany", 80620000);
    Countries france = new Countries("France", 66030000);
    Countries japan = new Countries("Japan", 127300000);

    country.put("UK", uk);
    country.put("Germany", germany);

    Countries country1 = country.get("UK");

    System.out.println(country1.getName());
  }
}