function Vehicle(x,y){
	this.pos = createVector();
	this.pos.x = Math.floor(Math.random() * (width));
	this.pos.y = Math.floor(Math.random() * (height))
	this.target = createVector(x,y);
	this.vel = p5.Vector.random2D();
	this.acc = createVector();
	this.maxspeed=10;
	this.maxforce = 1;
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
}

Vehicle.prototype.show = function(){
	stroke(255);
	strokeWeight(10);
	point(this.pos.x,this.pos.y);
}