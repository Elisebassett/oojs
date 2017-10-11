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
		var sleeve = '';

		for (var i = 0; i < this.photos.length; i++) {
			sleeve = `${sleeve} ${this.photos[i].path}`; 
		}
		return sleeve;
	}

	pullPhoto(p){
		var p = p;
		return this.photos[p];
	}

}

class Photo {
	constructor(path,location) {
		this.path = path;
		this.location = location;
	}
}







// Instances
var europe = new Album();

var one_setter = new Photo('','');
var spain = new Photo('cemetery.jpg','Madrid');
var switzerland = new Photo('fondue.jpg','Bern');
var italy = new Photo('kitten.jpg','Colgne');
var germany = new Photo('aurora.jpg','Dortmond');
var france = new Photo('secret_underground_museum.jpg','Paris');
//

// Add Photos
console.log(europe.photos);
europe.addPhoto(one_setter);
europe.addPhoto(spain);
europe.addPhoto(switzerland);
europe.addPhoto(italy);
europe.addPhoto(germany);
europe.addPhoto(france);
console.log(europe.photos);
//

// List Photos
console.log(europe.listPhoto());
//

// Pull Photo
console.log(europe.pullPhoto(5));


// var person_array = [
// {first_name: 'Elise', last_name:' Bassett'}, 
// {first_name:'Laven', last_name:' Marrow'}, 
// {first_name:'Ryan', last_name:' Richardson'}, 
// {first_name:'Linsdey',last_name:' Johnson'}, 
// {first_name:'Christi', last_name:' Barker'}, 
// {first_name:'Jonah', last_name:' Thompson'}, 
// {first_name:'Rolf', last_name:' Woolen'}
// ];

// for (var i = 0; i < person_array.length; i++) {
// 	console.log(person_array[i].first_name + person_array[i].last_name);
// }

