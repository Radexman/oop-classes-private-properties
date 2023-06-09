// ================ 09 Property Flags & Descriptors ================= //

Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

const rectObj = {
	name: 'Rectangle 1',
	width: 10,
	heigth: 10,
};

Object.defineProperty(rectObj, 'name', {
	writable: false,
	configurable: false,
	enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'New Name';
// delete rectObj.name;
// delete rectObj.width;
console.log(rectObj);

for (let [key, value] of Object.entries(rectObj)) {
	console.log(`${key}: ${value}`);
}
