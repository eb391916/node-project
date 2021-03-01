
var socket;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(220);

    socket = socket.io.connect('http://localhost:3000');
}

function draw() {
    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,36,36);
}