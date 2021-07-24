---
title: JavaScript Questions
layout: layouts/page.njk
permalink: /questions/javascript-questions/index.html
---

* Explain event delegation.

JavaScript event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.

* Explain how `this` works in JavaScript.

this is a keyword in JavaScript that is a property of an execution context. Its main use is in functions and constructors.

https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work

  * Can you give an example of one of the ways that working with `this` has changed in ES6?

  When es6 was released, it presented a wonderful new way to deal with the this keyword. It changed the this binding to a pattern called lexical scoping. The simplest way to describe lexical scoping is that the inner function (or any nested functions) have access to variables which are declared in it's outer scope.

  https://codegainz.com/this-keyword-es5-vs-es6-functions-javascript/#:~:text=When%20es6%20was%20released%2C%20it,declared%20in%20it's%20outer%20scope.

* Explain how prototypal inheritance works.

Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date. prototype .

One of the most important advantages of prototypal inheritance is that you can add new properties to prototypes after they are created. This allows you to add new methods to a prototype which will be automatically made available to all the objects which delegate to that prototype.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

* What's the difference between a variable that is: `null`, `undefined` or undeclared?

1.undefined is a variable that has been declared but no value exists and is a type of itself ‘undefined’.

2.null is a value of a variable and is a type of object. 

3.undeclared variables is a variable that has been declared without ‘var’ keyword.

testVar = ‘hello world’;
as opposed to
var testVar = ‘hello world’;
When former code is executed, undeclared variables are created as global variable and they are configurable (ex. can be deleted).

  * How would you go about checking for any of these states?

  We use ‘console.log();’ and ‘type of’ to check if a variable is undefined or null.

* What is a closure, and how/why would you use one?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

A closure is a pattern in JS that is used to execute a function with variables and after the function is executed the necessary variables or function returns are left available in there particular mamoey space associated with the original execution of the function even if the function is off the stack and unreachable.

* What language constructions do you use for iterating over object properties and array items?

for loop, for..in, for each..in, map, reduce etc.

* Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?

Well, the forEach() method doesn't actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array. ... The difference is that map() utilizes return values and actually returns a new Array of the same size.

* What's a typical use case for anonymous functions?

So, a typical use of anonymous function is used when we have urgency on the return value or certain piece of code to get execute inline.

* What's the difference between host objects and native objects?

From what I understand, objects are divided from which environment and language they are supplied: Host Objects and Native Objects.

Host Objects are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. Example, browser environment supplies objects such as window. While a node.js/server environment supplies objects such as NodeList.

Native Objects or Built-in Objects are standard built-in objects provided by Javascript. Native objects is sometimes referred to as ‘Global Objects’ since they are objects Javascript has provided natively available for use.

* Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

A common interview question whose intent is to uncover whether a candidate really understands the difference between function declarations, invocations and constructors. Let’s take a look at each of these examples and break down what they are doing.

function Person() {}
Declares (instantiates) a named function in memory, but does not execute it. This function can be called at a later point with the code Person(); . An important not here is that declared functions are available for use even before they are declared (as long as they are eventually declared).

var person = Person()
Declares a new function, Person, invokes it and then assigns the return value to the variable person. Important to understand here is that the variable is first hoisted to the top of the current scope and then when the assignment is encountered in the flow of code, the function Person is run and the result assigned. Until that point, the value of person is undefined.

var person = new Person()
In this case, we have the introduction of the new keyword which means that Person is an object constructor function which returns a new object instance. So while person in the example above is the returned value of Person (a string, number or whatever), the value of person in this example is actually an object.

Technically speaking, function Person(){} is just a normal function declaration. ... var person = Person() invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if the function is intended to be used as a constructor. https://trungk18.com/experience/different-between-function-person/#:~:text=Technically%20speaking%2C%20function%20Person(),just%20a%20normal%20function%20declaration.&text=var%20person%20%3D%20Person()%20invokes,be%20used%20as%20a%20constructor.



* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

* Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two?

The difference is that call() takes the function arguments separately, and apply() takes the function arguments in an array. CALL : A function with argument provide individually. If you know the arguments to be passed or there are no argument to pass you can use call. https://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply#:~:text=The%20difference%20is%20that%20call,function%20arguments%20in%20an%20array.&text=CALL%20%3A%20A%20function%20with%20argument,pass%20you%20can%20use%20call.

* Explain `Function.prototype.bind`.


prototype. The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

* What's the difference between feature detection, feature inference, and using the UA string?

Feature detection checks a feature for existence, e.g.:

if (window.XMLHttpRequest) {
    new XMLHttpRequest();
}
Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist, e.g.:

if (document.getElementsByTagName) {
    element = document.getElementById(id);
}
Checking the UA string is an old practice and should not be used anymore. You keep changing the UA checks and never benefit from newly implemented features, e.g.:

if (navigator.userAgent.indexOf("MSIE 7") > -1){
    //do something
}

* Explain "hoisting".


In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. https://www.geeksforgeeks.org/javascript-hoisting/

* Describe event bubbling.

Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object (Provided the handler is initialized).

* Describe event capturing.

Event capturing is one of two ways to do event propagation in the HTML DOM. In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements.

Capturing happens before bubbling. The three phases of event propagation are: capturing, target, and bubbling.

Event capturing is rarely used and, usually, events are handled on bubbling. When you use the on<event>-property or the two-argument method addEventListener(event, handler) to add event handlers, the events are only handled during the bubbling phase (the default case). However, you can still handle events during the capturing phase using the method given in the example below.

* What's the difference between an "attribute" and a "property"?

Attributes are refering to additional information of an object. Properties are describing the characteristics of an object. Most people use these two words as synonyms.

* What are the pros and cons of extending built-in JavaScript objects?

Because it can break other things. Extending built-in types, such as Object or Array is a terrible idea in Javascript because other libraries, and even client, can easily be affected. This is especially true for the Object prototype as everything in Javascript extends from it.

* What is the difference between `==` and `===`?

= is used for assigning values to a variable in JavaScript. == is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

* Explain the same-origin policy with regards to JavaScript.

The same-origin policy is a critical security mechanism that restricts how a document or script loaded by one origin can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors.

* Why is it called a Ternary operator, what does the word "Ternary" indicate?

Ternary ?: is an operator that takes 3 arguments and defines a conditional expression. It is a one-lined shorthand for an if-then statement and is also called Ternary operator or Conditional operator. ... In JavaScript, conditional operators can be evaluated to an Expression, not just statement.

* What is strict mode? What are some of the advantages/disadvantages of using it?

what are the advantages and disadvantages to using it? If you put "use strict"; at the top of your code (or function), then the JS is evaluated in strict mode. Strict mode throws more errors and disables some features in an effort to make your code more robust, readable, and accurate.

* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

Advantages:

Classes. Many (most?) transpiled languages give you classes, inheritance and sometimes interfaces. The common rebuttal to this is that it’s just syntax sugar and you’ve still got JS prototypical inheritance under the hood, but that misses the point: classes are always syntax sugar. A C++ compiler isn’t generating some magic OOP machine code, it is generating standard procedural assembly code. A transpiled language is just doing the same but emitting JS instead.
Types. JS vague typing and type guessing (“inference”) is a menace with a large code base. Half the unit tests in existence are there to try and plug the inability of JS to allow you to define what you mean. Most transpiled languages fix this to one degree or another thereby giving you a lot of your test suite by default and eliminating bugs before they happen. This is really why TypeScript exists.
Features: JS evolves quite slowly in terms of browser implementation. If you want to use ES6 features you need to transpile to ES5 anyway. TypeScript 2 is probably ES7+ in many ways. Other languages bring other features.
Disadvantages:

You’ll probably need webpack or gulp to automate all your transpiling and bundling.
The number of developers familiar with what you are doing is smaller.
Can’t think of another one offhand.
Personally I use TypeScript for virtually everything. Occassionally ES6. I haven’t written regular ES5 for so long that I can’t even remember exactly what features are missing. The only time I see it is as Babel output.
https://www.quora.com/What-are-some-of-the-advantages-disadvantages-of-writing-JavaScript-code-in-a-language-that-compiles-to-JavaScript

* What tools and techniques do you use debugging JavaScript code?

The best JavaScript debugging tools for 2021 and beyond
Developer tools in modern web browsers. Every modern browser has tools available within it to debug code. ...
The hackable debug tool — debugger. ...
Node. ...
Postman for debugging requests and responses. ...
ESLint. ...
JS Bin. ...
JSON Formatter and Validator. ...
Webpack.

https://raygun.com/learn/javascript-debugging-tools

* Explain the difference between mutable and immutable objects.

  * What is an example of an immutable object in JavaScript?

  * What are the pros and cons of immutability?

  * How can you achieve immutability in your own code?

* Explain the difference between synchronous and asynchronous functions.

* What is event loop?

  * What is the difference between call stack and task queue?

  So in short, a job queue is a queue of things to do (usually stored persistant) and a call stack is a stack of routines. A job would have variables assigned to it, and a call stack would be the abstract implementation. So a job could "call" a method from a call stack.

  A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

  A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty, but before returning control to the event loop being used by the user agent to drive the script's execution environment.

* What are the differences between variables created using `let`, `var` or `const`?

var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.

* What are the differences between ES6 class and ES5 function constructors?

ES6 class	ES5 Function Constructors
ES6 class basically does the work of defining a new object and appending functions to its prototype.	ES5 Function constructors work and look the same but the main difference is observed when the developer uses the Inheritance property.
They can be considered as the syntax base for constructor functions.	These can only be executed with the help of a new operator.
ES6 class allows the developers to instantiate objects using the new operator.	ES5 function constructors focus on how the objects are instantiated.
They also ensure the developer that this keyword which is basically used inside the class only refers to the object that is being created by the developer.	ES5 function constructor focus on implementing the reusable object creation code. Any function can be used as a constructor.

* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?

https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

* What advantage is there for using the arrow syntax for a method in a constructor?

Arrow functions are best for callbacks or methods like map, reduce, or forEach. You can read more about scopes on MDN. On a fundamental level, arrow functions are simply incapable of binding a value of this different from the value of this in their scope.

* What is the definition of a higher-order function?

In mathematics and computer science, a higher-order function is a function that does at least one of the following: takes one or more functions as arguments, returns a function as its result. All other functions are first-order functions. In mathematics higher-order functions are also termed operators or functionals.

* Can you give an example for destructuring an object or an array?

* Can you give an example of generating a string with ES6 Template Literals?

`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`

Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

* Can you give an example of a curry function and why this syntax offers an advantage?

Currying provides a way for working with functions that take multiple arguments, and using them in frameworks where functions might take only one argument. For example, some analytical techniques can only be applied to functions with a single argument. Practical functions frequently take more arguments than this.

* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?

Spread syntax and how is it different from rest syntax
Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

* How can you share code between files?

What I needed to do was take parts of the URL and use them across different files. There is a simple way to share data and even functions among Protractor spec JavaScript files. They run in node. js with a built-in way to define modules and use and reuse them - http://nodejs.org/docs/latest/api/modules.html.

Using ES5 syntax in Node means that the sharing of code between files is done with the 'require' and 'module. exports' statements. A 'module' in Javascript can be thought of as a container that holds related code which can then be exported to another file.

* Why you might want to create static class members?

The advantage of using a static class is that the compiler can check to make sure that no instance members are accidentally added. The compiler will guarantee that instances of this class cannot be created. Static classes are sealed and therefore cannot be inherited. They cannot inherit from any class except Object.

class ClassWithStaticMethod {

  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called.';
  }

}

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// output: "static method has been called."

The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

* What is the difference between `while` and `do-while` loops in JavaScript?

It means the While loop executes the code block only if the condition is True. ... At the end of the loop, the Do While loop tests the condition. So, Do While executes the statements in the code block at least once even if the condition Fails.

* What is a promise? Where and how would you use promise?

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.


## Coding questions
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* What will be returned by each of these?
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```
* Write an immediately invoked function expression (IIFE)




https://rlynjb.medium.com/js-interview-question-what-s-a-typical-use-case-for-anonymous-functions-54cf547b2a0e
