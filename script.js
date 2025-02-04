// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}
Car.prototype.getMakeModel=fuction(){
	return `${this.make}  ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(make,model,this);
	this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);

SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed=fuction()(){
	return `${this.topSpeed}`;
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;