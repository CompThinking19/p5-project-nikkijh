// ReadMe
/*For my project, I wanted to make something that was interactive. I was playing with the examples on the
P5JS website and came up with the idea to make something that would add a ball everytime you clicked the mouse.
I also wanted it to bounce all over the canvas. So I decided to make it a basketball that would bounce all over
and the background would be a basketball court. I chose the 76ers basketball court because that is my favorite
team. So now everytime you click on the court, it will add a basketball to the canvas and it will bounce
all over. The final project turned out the way I wanted.  */


let balls;
// creating a variable to keep track of the balls on the screen
let ballImage;
// creates a variable to store the basketball image
let bgimage;
//creates a variable to store the background image of the court


function preload(){
  ballImage = loadImage('assets/basketball.png');
  bgimage = loadImage('assets/court.png');
}
// this function loads and stores the images of the basketball and the court to be drwan later

function setup() {
  // put setup code here
  createCanvas(800,500);
  balls = [];
}
// this creates the canvas where everything is drawn on and sets balls as a list

function draw() {
  background(0);
  //this draws the black background
  image(bgimage, 0, 0, width, height)
  //this draw the background image at size width by height. scale to fit
  for(i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
// this is a loop that loops through all of the balls calling update and display on each one
}


function mousePressed() {
  if(balls.length >=80){
    return;
    //this will only allow up to 60 balls on the canvas
  }
  balls.push(new Ball(mouseX, mouseY));
}
//this is a function that creates a new ball everytime you click the mouse and it adds it to the ball list

class Ball {
  constructor(xin, yin) {
    //this is the constructor for the ball class that takes an xy position
    this.x = xin;
    // this is storing the passed in x
    this.y = yin;
    //this is storing the passed in y
    this.diameter = 50;
    //this is storing the diameter of the ball which is 50 pixels
    this.gravity = 0.8;
    //this is how fast it will accelarate falling
    this.velY = 0
    //This is the vertical velocity which is how fast it will go up and down
    this.velX = random(-5, 5);
    //this is the horizontal velocity which is the side to side movement
  }

  update(){
    this.bounce();
    //this calls bounce on the ball
    this.velY += this.gravity;
    //this adds gravity to the velocity which will make it accelerate downward
    this.y += this.velY;
    // this adds vertical velocity to the vertical position making it move up and down
    this.x += this.velX;
    //this adds horizontal velocity to the horizontal position making it more side to side
    if(this.velY >= 0 && this.velY <= 0.5){
      this.velY = 0;
    }
    //checking if the velocity is near zero and stops the ball

  }

  bounce(){
    if(this.y + this.diameter >= height && this.velY >0){
      this.velY = -29
    }
    // this will make the ball bounce off the floor or bottom of the canvas
    else if(this.y <= 0 && this.velY <0){
      this.velY *= -1
    }
    //this will make the ball bounce off the roof or top of the canvas

    if((this.x + this.diameter >= width && this.velX >0) || (this.x <= 0 && this.velX <0)){
      this.velX *= -1
    }
    //this will make the ball bounce of the sides of the canvas
  }

  display() {
    image(ballImage, this.x, this.y);
    //this draws the ball image at its position. making it look like a basketball
  }
}


// control - option - L to run the server
