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


////////////////////////////Second Task///////////////////////////////////////////////

class Album {
	constructor() {
		this.photos = [];
	}

	addPhoto(photo) {
		this.photos.push(photo);
	}

	listPhoto(){
		return this.photo
	}

}

var europe = new Album();







class Photo {
	constructor(path,location) {
	}
}



var spain = new Photo('cemetery.jpg','Madrid');
var switzerland = new Photo('fondue.jpg','Bern');
var italy = new Photo('kitten.jpg','Colgne');
var germany = new Photo('aurora.jpg','Dortmond');
var france = new Photo('secret_underground_museum.jpg','Paris');



console.log(spain);
console.log(europe.addPhoto(spain));
console.log(europe.addPhoto(switzerland));
console.log(europe.addPhoto(italy));
console.log(europe.addPhoto(germany));
console.log(europe.addPhoto(france));

console.log(europe.listPhoto());
console.log(europe.pullPhoto());



