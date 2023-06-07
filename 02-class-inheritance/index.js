// ====================== 02 Class Inheritance ====================== //

// Parent Class
class Shape {
	constructor(name) {
		this.name = name;
	}
	logName() {
		console.log('Shape Name: ' + this.name);
	}
}

// Sub Class
class Rectangle extends Shape {
	constructor(name, width, heigth) {
		super(name);
		this.heigth = heigth;
		this.width = width;
	}
}

class Circle extends Shape {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}
	logName() {
		console.log('Circle Name: ' + this.name);
	}
}

const rect = new Rectangle('Rect 1', 20, 20);
rect.logName();

const cir = new Circle('Cir 1', 30);
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
