// object literal w/ method and this keyword

var c = {
	name: 'c obj', 
	log: function() { 
		this.name= 'Updated c obj';
		console.log(this); // { "name": "Updated c obj" }  updated c obj

		var setname = function(newname) {
			this.name = newname;
		}

		setname('Update again! The c obj');
		console.log(this); 	// { "name": "Updated c obj" }  DID NOTHING! WHY?
							// This was added to the global object, window
	}
}

c.log();