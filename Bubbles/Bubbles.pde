ArrayList<Bubble> bubbles;



void setup() {
  size(1024, 768);
  int numberOfBubbles = 80;
  bubbles = new ArrayList<Bubble>();
  for (int i = 0; i < numberOfBubbles; i++) {
    int x = int(random(width));
    int y = int(random(height));
    int speed = int(random(2, 8));
    int size = int(random(75, 125));
    bubbles.add(new Bubble(x, y, 100, speed) );
  }
}

void draw() {
  background(#EFDC05);
  for (Bubble bubble : bubbles ) {
    bubble.move();
    bubble.draw();
  }
}




class Bubble {
  int x;
  int y;
  int diameter;
  int speed;

  Bubble(int x, int y, int diameter, int speed) {
    this.x = x;
    this.y = y + height;
    this.diameter = diameter;
    this.speed = speed;
  }

  void move() {
    y -= speed;
    if (y < 0) {
      y = height + diameter;
    }
  }

  void draw() {
    fill(#30A9DE, 64);
    stroke(255);
    ellipse(x, y, diameter, diameter);
    fill(#C0C0C0);
    ellipse((x + diameter/4), (y-diameter/4), diameter/8, diameter/8);
  }
}