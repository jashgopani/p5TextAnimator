var circles = [];
var img;
var spots = [];
var attempts = 0;

function preload(){
	var path = '../uploads/user.'+sessionStorage.getItem("type");
	img=loadImage(path);
}

function setup(){
	console.log(img);
	createCanvas(img.width,img.height);
	image(img,0,0);
	loadPixels();
	for(var x=0;x<img.width;x++){
		for(var y=0;y<img.height;y++){
			var index = x + y*img.width;
			var c = get(x,y);
			if((c[0]>200 && c[1]>200 && c[2]>200)){
				var vector = {
					"x" : x,
					"y" : y 
				}
				spots.push(vector);
			}
		}
	}

	attempts = spots.length;

}

function draw(){
	frameRate(60);
	background(0);
	console.log(attempts);
 	attempts -= 100;
 	if(attempts > 0){
 	 	var newc = newCircle();//get a new circle
 	
 	 	if(newc != null){//add to array if not null
 	 		circles.push(newc);
 	 	}
 	 }

	circles.forEach(function(c){//draw all circles
		// console.log(c);
		if(c.growing){ //circle is growing
			if(c.edges()){//if it is touching canvas edges
				c.growing = false;
			}else{//if it is not touching canvas edges
				circles.forEach(function(other){
					// console.log(other);
					if(c != other){
						var d = dist(c.x,c.y,other.x,other.y);//distance between current and all other circles of the array
						if(d < c.r + other.r){// -2 for stroke size
							c.growing = false;//it is touching any other circle
						return 0;
						}
					}
				});
			}	
		}
		c.grow();
		c.show();
	});

	
	

}

function newCircle(){
	var r=Math.floor(Math.random() * (spots.length) );
	var spot = spots[r];

	//generating random position coordinates
	var x=spot.x;
	var y=spot.y;
	// console.log(x,y);

	var valid = true;
	circles.forEach(function(c){
		var d = dist(x,y,c.x,c.y);
		if(d < c.r){
			valid = false;
			return 0;
		}
	});

	if(valid){
		return (new Circle(x,y));
	}else{
		return null;
	}

}