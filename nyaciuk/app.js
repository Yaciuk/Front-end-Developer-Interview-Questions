
var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John

var fx = john.greet;

console.log(fx);


// when invoked, fx = greet memory space for this so via default binding the global/window execution/lex doesn't have name
fx("Mark");   // Hi Mark, my name is  

console.log(fx);

/* As we see when you call john.greet(“Mark”) this will refer to the john object so this.name will be John
But after that when assignment var fx = john.greet;
So fx will be a reference to the greet function itself so the default binding applies and this will refer to Window. */


// object literal w/ method and this keyword
/*
var c = {
	name: 'c obj', 
	log: function() {

		// Doing this allows
		var self  = this;
		// let in ES6 solves this 'this' issue

		self.name= 'Updated c obj';
		console.log(self); 

		// The ability to mutate the correct obj
		// when function is internal
		var setname = function(newname) {
			self.name = newname;
		}

		setname('Update again! The c obj');
		console.log(self); 	
	}
}

c.log();*/