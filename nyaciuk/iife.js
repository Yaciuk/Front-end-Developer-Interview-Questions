// Immediately Invoked Function Expression (IIFE)

var iife = function(mer) {
	//console.log('Cat says' + mer);

	return 'Meow' + mer;
}('Nicole');


// wrap funtion in () operator to get function expression
// So not it assumes you are running this on 'the fly'

(function(mer) {
	return 'Meow' + mer;
});
