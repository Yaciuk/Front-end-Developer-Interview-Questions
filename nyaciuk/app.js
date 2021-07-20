// object literal w/ method and this keyword

var c = {
	name: 'c obj', 
	log: function() {

		var self  = this;

		self.name= 'Updated c obj';
		console.log(self); // { "name": "Updated c obj" }  updated c obj

		var setname = function(newname) {
			self.name = newname;
		}

		setname('Update again! The c obj');
		console.log(self); 	// { "name": "Updated c obj" }  DID NOTHING! WHY?
							// This was added to the global object, window
	}
}

c.log();