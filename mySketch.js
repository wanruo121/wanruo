let Counter=0;
function setup() {
	createCanvas(800, 800);
	angleMode(DEGREES);
	background(0);
}

function draw() {
	
	Counter++;
	
push()
	translate(300,200);
	rotate(Counter);
	fill('red');
	ellipse(100,100,100,40);
pop()
}
