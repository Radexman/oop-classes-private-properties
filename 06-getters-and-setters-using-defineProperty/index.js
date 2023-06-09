// ============ 06 Getters & Setters Using defineProperty =========== //

// Constructor Function
function Person(firstName, lastName) {
	this._firstName = firstName;
	this._lastName = lastName;

	Object.defineProperty(this, 'firstName', {
		get: function () {
			return this.capitalizeFirst(this._firstName);
		},
		set: function (value) {
			this._firstName = value;
		},
	});

	Object.defineProperty(this, 'lastName', {
		get: function () {
			return this.capitalizeFirst(this._lastName);
		},
		set: function (value) {
			this._lastName = value;
		},
	});

	Object.defineProperty(this, 'fullName', {
		get: function () {
			return this.firstName + ' ' + this.lastName;
		},
	});
}

Person.prototype.capitalizeFirst = function (value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

// Object Literal
const PersonObj = {
	_firstName: 'jane',
	_lastName: 'doe',

	get firstName() {
		return Person.prototype.capitalizeFirst(this._firstName);
	},

	set firstName(value) {
		this._firstName = value;
	},

	get lastName() {
		return Person.prototype.capitalizeFirst(this._lastName);
	},

	set lastName(value) {
		this._lastName = value;
	},

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},
};

const personOne = new Person('john', 'doe');
console.log(personOne.firstName);
console.log(personOne.lastName);
console.log(personOne.fullName);

const personTwo = Object.create(PersonObj);
console.log(personTwo.firstName);
console.log(personTwo.lastName);
console.log(personTwo.fullName);
