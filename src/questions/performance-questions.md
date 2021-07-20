---
title: Performance Questions
layout: layouts/page.njk
permalink: /questions/performance-questions/index.html
---

* What tools would you use to find a performance bug in your code?

Developer tools in modern web browsers. Every modern browser has tools available within it to debug code. ...
The hackable debug tool — debugger. ...
Node. ...
Postman for debugging requests and responses. ...
ESLint. ...
JS Bin. ...
JSON Formatter and Validator. ...
Webpack.


* What are some ways you may improve your website's scrolling performance?

Use requestAnimationFrame() callback.
Do not trigger reflows and/or repaints by polling expensive CSS properties.
Turn off complex pointer-events (pointer-events: none) while scrolling.
Turn off "expensive" styles while scrolling.
Promote fixed blocks to separate layers (will-change: transform, transform: translateZ(0));
Do not use background-attachment: fixed
Do not use scrolljacking


* Explain the difference between layout, painting and compositing.


