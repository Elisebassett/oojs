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


////////////////////////////Third Task///////////////////////////////////////////////


class Library {
	constructor(books){
		this.books = [];

	}
	addBook(book){
		this.books.push(book);
	}
	pullBook(search){
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === search) {
				return this.books[i];
			}	 
		}
	}
	burnBook(burn){
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].title === burn) {
				 this.books.splice(i,1);
			}	 
		}
	}
	countBooks(){
		return this.books.length;
	}
}

class Book{
	constructor(title,author,genre){
		this.title = title;
		this.author = author;
		this.genre = genre
	}
}

////Instances////
var strand = new Library();

var potter_one = new Book('Harry Potter and the Sorcerers Stone', 'JK Rowling', 'fantasy');
var potter_two = new Book('Harry Potter and the Chamber of Secrets', 'JK Rowling', 'fantasy');
var potter_three = new Book('Harry Potter and the Prisoner of Azkaban', 'JK Rowling', 'fantasy');
var potter_four = new Book('Harry Potter and the Goblet of Fire ', 'JK Rowling', 'fantasy');
var potter_five = new Book('Harry Potter and the Order of the Pheonix', 'JK Rowling', 'fantasy');
var potter_six = new Book('Harry Potter and the Half-Blood Prince', 'JK Rowling', 'fantasy');
var potter_seven = new Book('Harry Potter and the Deathly Hallows', 'JK Rowling', 'fantasy');
var wells = new Book('Time Machine', 'HG Wells', 'Sifi');
var aziz = new Book('Modern Romance', 'Aziz Anzari', 'Non Fiction');
var alchemist = new Book('The Alchemist', 'Paulo Cohelo', 'Fiction');

////Add Books////
console.log(strand.books);
strand.addBook(potter_one);
strand.addBook(potter_two);
strand.addBook(potter_three);
strand.addBook(potter_four);
strand.addBook(potter_five);
strand.addBook(potter_six);
strand.addBook(potter_seven);
strand.addBook(wells);
strand.addBook(aziz);
strand.addBook(alchemist);
console.log(strand.books);

////Pull Book////
console.log(strand.pullBook('Modern Romance'));

////Burn Book////
strand.burnBook('Time Machine');
console.log(strand.books);

////Count Books/////
console.log(strand.countBooks());
















