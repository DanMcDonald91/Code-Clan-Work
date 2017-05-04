class Bear {
private String name;
 private int age;
 private double weight;
  private int height;
  public Bear(String name, int age, double weight, int height) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.height = height;
  }

public String getName() {
return this.name;
}


public void setName(String name){
  this.name = name;

}

public int getAge() {
  return this.age;
}

public double getWeight() {
  return this.weight;
}

public boolean readyToHibernate(){
  return this.weight >=80.00;
}

public int getHeight() {
  return this.height;
}
public boolean calculateBMI() {
 double bmi = (this.weight / this.height) / this.height;
 return bmi >= 30;
}
} 

