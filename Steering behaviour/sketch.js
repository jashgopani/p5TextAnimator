var font;
var vehicles = [];
var img;
var spots = [];

function preload(){
	var path = '../uploads/user.'+sessionStorage.getItem("type");
	img=loadImage(path);
	
}

function setup(){
	createCanvas(img.width,img.height);

	//loading points of image
	image(img,0,0);
	loadPixels();
	for(var x=0;x<img.width;x+=10){
		for(var y=0;y<img.height;y+=10){
			var index = x + y*img.width;
			var c = get(x,y);
			var top = get(x,y+1);
			var left = get(x-1,y);
			var right = get(x+1,y);
			var bottom = get(x,y-1);
			if(c[0]>200 && c[1]>200 && c[2]>200){
				// if((top[0]<2 && top[1]<2 &&top[2]<2) ||(left[0]<2 && left[1]<2 &&left[2]<2 )||(right[0]<2 && right[1]<2 &&right[2]<2 )||(bottom[0]<2 && bottom[1]<2 &&bottom[2]<2 )){
					var vector = {
					"x" : x,
					"y" : y
				}
				spots.push(vector);
			// }
			}
		}
	}

	for(var i=0;i<spots.length;i++){
		var pt=spots[i];
		var vehicle = new Vehicle(pt.x,pt.y);
		vehicles.push(vehicle);
	}
}

function draw(){
	// frameRate();
	background(0);
	for(var i=0;i<vehicles.length;i++){
		var v = vehicles[i];
		v.behaviours();
		v.update();
		v.show();
	}
}