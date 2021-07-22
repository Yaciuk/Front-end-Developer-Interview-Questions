// Immediately Invoked Function Expression (IIFE)

var firstname = 'Nicole';

(function(mer) {

	var greeting = "inside iife: hi ";
	console.log(greeting + 'mer')

})(firstname);







/*var iife = function(mer) {
	//console.log('Cat says' + mer);

	return 'Meow' + mer;
}('Nicole');*/


// wrap funtion in () operator to get function expression
// So not it assumes you are running this on 'the fly' when this line of code is executed
// a function obj can be invoked