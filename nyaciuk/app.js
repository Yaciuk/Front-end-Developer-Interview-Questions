// object literal w/ method and this keyword

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

c.log();