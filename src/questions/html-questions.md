---
title: HTML Questions
layout: layouts/page.njk
permalink: /questions/html-questions/index.html
---

* What does a `doctype` do?


Per HTML and XHTML standards, a DOCTYPE (short for “document type declaration”) informs the validator which version of (X)HTML you're using, and must appear at the very top of every web page. DOCTYPEs are a key component of compliant web pages: your markup and CSS won't validate without them. https://alistapart.com/article/doctype/

Doctype stands for Document Type Declaration. It informs the web browser about the type and version of HTML used in building the web document. This helps the browser to handle and load it properly. While the HTML syntax for this statement is somewhat simple, you must note each version of HTML has its own rules.

* How do you serve a page with content in multiple languages?

* What kind of things must you be wary of when designing or developing for multilingual sites?

* What are `data-` attributes good for?

W3c : Definition and Usage

The data-* attribute gives us the ability to embed custom data attributes on all HTML elements. The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

https://css-tricks.com/a-complete-guide-to-data-attributes/

* Consider HTML5 as an open web platform. What are the building blocks of HTML5?

What are the building blocks of HTML5? Semantics — Allowing you to describe more precisely what your content is. Connectivity — Allowing you to communicate with the server in new and innovative ways. Offline and storage — Allowing webpages to store data on the client-side locally and operate offline more efficiently.
https://codeburst.io/clearing-your-front-end-job-interview-html-706f8b2c7dca#:~:text=What%20are%20the%20building%20blocks,and%20operate%20offline%20more%20efficiently.

* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

https://stackoverflow.com/questions/5523140/html5-local-storage-vs-session-storage
localStorage and sessionStorage both extend Storage. There is no difference between them except for the intended "non-persistence" of sessionStorage.

That is, the data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

For sessionStorage, changes are only available per tab. Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.

sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. ... A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores. 


* Describe the difference between `<script>`, `<script async>` and `<script defer>`.

	Async scripts are executed as soon as the script is loaded, so it doesn't guarantee the order of execution (a script you included at the end may execute before the first script file )

Defer scripts guarantees the order of execution in which they appear in the page.

	https://stackoverflow.com/questions/10808109/script-tag-async-defer

* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

HTML is loaded line by line and runs it will call the files and execute it’s contents as the line is loaded. JavaScript is known to delay or block some pages from loading because of this.

It became a best practice to add JavaScript or refer to external JavaScript files at the bottom of the page, the files are only loaded after all the page content loads.

Currently there is an alternative most recent browsers implemented called async.

<script src=”main.js” async></script> 
By adding the async attribute you are telling the browser to load the file asynchronously. This means it is loaded as a “background task” and will not block the page from continuing to load.

But as I mentioned before, it is a best practice to load JavaScript files at the bottom of the page, right before closing the body tag. Unless you specifically need the script to be loaded before the page content, it is still a best practice to keep the scripts at the bottom of the page.

Why is it generally a good idea to position CSS <link> s between <head></head> and JS <script> s just before </body> ? ... Downloading the scripts at the bottom will allow the HTML to be parsed and displayed to the user first. An exception for positioning of <script> s at the bottom is when your script contains document.


* What is progressive rendering?

Progressive Rendering is the technique of sequentially rendering portions of a webpage in the server and streaming it to the client in parts without waiting for the whole page to rendered.

Progressive rendering is the name given to techniques used to render content for display as quickly as possible.

It used to be much more prevalent in the days before broadband internet but it's still useful in modern development as mobile data connections are becoming increasingly popular (and unreliable!)

Examples of such techniques :

Lazy loading of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.
Prioritizing visible content (or above the fold rendering) where you include only the minimum css/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred javascript (domready/load) to load in other resources and content.



* Why you would use a `srcset` attribute in an image tag? 

srcset allows you to define a list of different image resources along with size information so that browser can pick the most appropriate image based on the actual device's resolution. The actual width of the image or display density: Either using display density descriptor, for example, 1.5x , 2x etc.

Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
Anthony Perez
Anthony Perez

Sep 22, 2019·2 min read


You would use the srcset attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage (because serving a larger image will not have any visible difference). For example: <img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt=""> tells the browser to display the small, medium or large .jpg graphic depending on the client's resolution. The first value is the image name and the second is the width of the image in pixels. For a device width of 320px, the following calculations are made:
500 / 320 = 1.5625
1000 / 320 = 3.125
2000 / 320 = 6.25
If the client’s resolution is 1x, 1.5625 is the closest, and 500w corresponding to small.jpg will be selected by the browser.
If the resolution is retina (2x), the browser will use the closest resolution above the minimum. Meaning it will not choose the 500w (1.5625) because it is greater than 1 and the image might look bad. The browser would then choose the image with a resulting ratio closer to 2 which is 1000w (3.125).
srcsets solve the problem whereby you want to serve smaller image files to narrow screen devices, as they don't need huge images like desktop displays do — and also optionally that you want to serve different resolution images to high density/low-density screens.
References
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
Anthony Perez
Follow
3


* Explain the process the browser uses when evaluating the content of this attribute.


* Have you used different HTML templating languages before?

Using templating languages is a great way of connecting the server side to the frontend of your site. Certain frameworks make it extremely easy to use and handle all the parsing for you. Here are some templating languages that you can use, with little code snippets to show you how they work and what makes them unique.

The top 5 JavaScript templating engines
Mustache. Mustache is often considered the base for JavaScript templating. ...
Underscore Templates. Underscore is a utlity belt library for JavaScript. ...
Embedded JS Templates. Embedded JS (EJS) is inspired by ERB templates. ...
HandlebarsJS. ...
Jade templating.

https://www.creativebloq.com/web-design/templating-engines-9134396
https://colorlib.com/wp/top-templating-engines-for-javascript/

* What is the difference between `canvas` and `svg`?

https://www.geeksforgeeks.org/difference-between-svg-and-html-5-canvas/
SVG: The Scalable Vector Graphics (SVG) is an XML-based image format that is used to define two-dimensional vector-based graphics for the web. Unlike raster image (Ex .jpg, .gif, .png, etc.), a vector image can be scaled up or down to any extent without losing the image quality.

An SVG image is drawn out using a series of statements that follow the XML schema — that means SVG images can be created and edited with any text editor, such as Notepad. There are several other advantages of using SVG over other image formats like JPEG, GIF, PNG, etc.

Canvas: The HTML element is used to draw graphics on the fly, via scripting (usually JavaScript). The element is only a container for graphics. You must use a script to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

Difference between SVG and HTML5 Canvas:

SVG	Canvas
Vector based (composed of shapes)	Raster based (composed of pixel)
SVG has better scalability. So it can be printed with high quality at any resolution.	Canvas has poor scalability. Hence it is not suitable for printing on higher resolution.
SVG gives better performance with smaller number of objects or larger surface.	Canvas gives better performance with smaller surface or larger number of objects.
SVG can be modified through script and CSS.	Canvas can be modified through script only.
Multiple graphical elements, which become the part of the page’s DOM tree.	Single element similar to <img> in behavior. Canvas diagram can be saved to PNG or JPG format.


* What are empty elements in HTML ?

An empty element is an element from HTML, SVG, or MathML that cannot have any child nodes (i.e., nested elements or text nodes). In HTML, using a closing tag on an empty element is usually invalid. ... For example, <input type="text"></input> is invalid HTML.


Empty elements (also called self-closing or void elements) are not container tags — that means, you can not write <hr>some content</hr> or <br>some content</br> . A typical example of an empty element, is the <br> element, which represents a line break.
