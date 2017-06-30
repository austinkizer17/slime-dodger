var Monster = function(x,y){
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
}
Monster.prototype.updateLocation(dx,dy){
	this.x += dx;
	this.y += dy;
}
Monster.prototype.updateVelocity(dvx,dvy){
	this.vx += dvx;
	this.vy += dvy;
}