
// function statement
function a() {
	console.log(this);
	this.newvar = 'mer';
}

// function expression
var b = function(){
	console.log(this);
}

console.log(newvar); // mer

a(); // Window

console.log(newvar); // mer (since a has been invoced) Window.newvar

b(); // Window