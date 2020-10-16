function Vehicle(x,y,posX,posY){
	this.pos = createVector();
	this.pos.x = posX;
	this.pos.y = posY;
	this.target = createVector(x,y);
	this.vel = p5.Vector.random2D();
	this.acc = createVector();
	this.maxspeed=10;
	this.maxforce = 1;
	this.colorRed = Math.floor(Math.random() * (255 -1)+1 );
	this.colorGreen = Math.floor(Math.random() * (255 -1)+1 );
	this.colorBlue = Math.floor(Math.random() * (255 -1)+1 );
}

Vehicle.prototype.behaviours = function(){
	var arrive = this.arrive(this.target);
	var mouse = createVector(mouseX,mouseY);
	var flee = this.flee(mouse);

	arrive.mult(1);
	flee.mult(10);

	this.applyForce(arrive);
	this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f){
	this.acc.add(f);
}

Vehicle.prototype.arrive = function(target){
	var desired = p5.Vector.sub(this.target , this.pos);
	var d=desired.mag();
	var speed = this.maxspeed;
	if(d < 100){
		speed = map(d,0,100,0,this.maxspeed);
	}
	desired.setMag(speed);
	var steer = p5.Vector.sub(desired,this.vel);
	steer.limit(this.maxforce);
	return steer;
}

Vehicle.prototype.flee = function(target){
	var desired = p5.Vector.sub(target,this.pos);
	var d = desired.mag();
	if(d < 50){
		desired.setMag(this.maxspeed);
		desired.mult(-1);
		var steer = p5.Vector.sub(desired,this.vel);
		steer.limit(this.maxforce);
		return steer;
	}else{
		return createVector(0,0);
	}
}

Vehicle.prototype.update = function(){
	this.pos.add(this.vel);
	this.vel.add(this.acc);
	this.acc.mult(0);
	console.log('new velocity',this.vel);
	console.log('new acceleration',this.acc);
}

Vehicle.prototype.show = function(){
	// stroke(255);
	fill(this.colorBlue,this.colorGreen,this.colorRed)
	strokeWeight(1);
	ellipse(this.pos.x,this.pos.y,5,5);
}
