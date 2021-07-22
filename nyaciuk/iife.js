/* using a function expression with an anonoymous function */


var greetFunc = functoin(name){
	console.log('Hello' + name);
};

greetFunc('Nicole');

var iife = function(mer) {
	console.log('Cat says' + mer);
}();