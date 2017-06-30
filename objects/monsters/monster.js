var Monster = function(x,y){
	this.x = x;
	this.y = y;
}
Monster.Prototype.UpdateLocation(dx,dy){
	this.x += dx;
	this.y += dy;
}