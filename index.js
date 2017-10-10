class Multiplier {
	constructor(n) {
		this.n = n;
		this.currentValue = 1;
	}

	multiply(){
		this.currentValue = this.n * this.currentValue;
	}
	getCurrentValue() {
		return this.currentValue;
	}
}

var value = new Multiplier(3);

value.multiply()
console.log(value.getCurrentValue());
value.multiply()
console.log(value.getCurrentValue());
value.multiply()
console.log(value.getCurrentValue());




