function Circle(x,y){
	this.x = x;
	this.y = y;
	this.r = 1;
	this.growing = true;
	this.colorRed = Math.floor(Math.random() * (255 -1)+1 );
	this.colorGreen = Math.floor(Math.random() * (255 -1)+1 );
	this.colorBlue = Math.floor(Math.random() * (255 -1)+1 );
}

Circle.prototype.show = function(){
	// fill(this.colorRed,this.colorBlue,this.colorGreen);
	// fill(255);
	noFill();
	// noStroke();
	stroke(this.colorBlue,this.colorGreen,this.colorRed);
	strokeWeight(2);
	ellipse(this.x,this.y,this.r*2,this.r*2);

}

Circle.prototype.grow = function(){
	if(this.growing){
		this.r = (this.r + 0.1 );
	}
}

Circle.prototype.edges = function(){
	if(this.x + this.r > width ||this.x - this.r < 0 ||this.y + this.r > height || this.y - this.r < 0 )
		return true;
}