
// function statement
function a() {
	console.log(this);
	this.newvar = 'mer';
}

// function expression
var b = function(){
	console.log(this);
}

// console.log(newvar); // newvar is not defined bc a(); hasn't been invoced

a(); // Window

console.log(newvar); // mer (since a has been invoced) Window.newvar

b(); // Window

// object literal w/ method and this keyword

var c = {
	name: 'c obj', // property bc primitive
	log: function() { // method bc function
		console.log(this); // this refers to c with obj literal/method
	}
}

c.log();