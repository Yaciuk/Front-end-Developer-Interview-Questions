---
title: JavaScript Questions
layout: layouts/page.njk
permalink: /questions/javascript-questions/index.html
---

* Explain event delegation.

JavaScript event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.

* Explain how `this` works in JavaScript.

  * Can you give an example of one of the ways that working with `this` has changed in ES6?

* Explain how prototypal inheritance works.

* What's the difference between a variable that is: `null`, `undefined` or undeclared?

  * How would you go about checking for any of these states?

* What is a closure, and how/why would you use one?

* What language constructions do you use for iterating over object properties and array items?

* Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?

Well, the forEach() method doesn't actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array. ... The difference is that map() utilizes return values and actually returns a new Array of the same size.

* What's a typical use case for anonymous functions?

* What's the difference between host objects and native objects?

* Explain the difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

* Can you explain what `Function.call` and `Function.apply` do? What's the notable difference between the two?

* Explain `Function.prototype.bind`.

* What's the difference between feature detection, feature inference, and using the UA string?

* Explain "hoisting".

* Describe event bubbling.

* Describe event capturing.

* What's the difference between an "attribute" and a "property"?

* What are the pros and cons of extending built-in JavaScript objects?

* What is the difference between `==` and `===`?

* Explain the same-origin policy with regards to JavaScript.

* Why is it called a Ternary operator, what does the word "Ternary" indicate?

* What is strict mode? What are some of the advantages/disadvantages of using it?

* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

* What tools and techniques do you use debugging JavaScript code?

* Explain the difference between mutable and immutable objects.

  * What is an example of an immutable object in JavaScript?

  * What are the pros and cons of immutability?

  * How can you achieve immutability in your own code?

* Explain the difference between synchronous and asynchronous functions.

* What is event loop?

  * What is the difference between call stack and task queue?

* What are the differences between variables created using `let`, `var` or `const`?

* What are the differences between ES6 class and ES5 function constructors?

* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?

* What advantage is there for using the arrow syntax for a method in a constructor?

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
