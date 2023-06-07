// ======================= 03 Static Methods ======================= //

class Rectangle {
	constructor(name, width, height) {
		this.name = name;
		this.width = width;
		this.height = height;
	}

	area() {
		return this.height * this.width;
	}

	static getClass() {
		return 'Rectangle';
	}
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
