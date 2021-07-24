---
title: CSS Questions
layout: layouts/page.njk
permalink: /questions/css-questions/index.html
---

* What is CSS selector specificity and how does it work?
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* Describe BFC (Block Formatting Context) and how it works.
* What are the various clearing techniques and which is appropriate for what context?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* Can you give an example of an `@media` property other than `screen`?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* What is the CSS `display` property and can you give a few examples of its use?
* What's the difference between inline and inline-block?
* What's the difference between the "nth-of-type()" and "nth-child()" selectors?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you used CSS Grid?
* Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?
* How is clearfix css property useful?
* Can you explain the difference between px, em and rem as they relate to font sizing?
* Can you give an example of a pseudo class? Can you provide an example use case for a pseudo class? 
* What is the difference between a block level element and an inline element. Can you provide examples of each type of element?

*Why is it so hard to center things in CSS?
It’s not. Chances are you’re unwittingly making it very difficult for yourself.

In any case, be sure to avoid ‘floats’ in CSS and that anything that you wish to center is an inline-block element (this applies to both horizontal and vertical centering).

‘Floats’ in CSS - any element with a ‘float’ property whose value is either left or right - break the natural flow of the document. By default, elements will always flow left-to-right. Floating an element to the right will remove that element from the natural flow of the document and often therefore has some tendency to cause various problems with regards to how certain elements are positioned.

See Centering in CSS: A Complete Guide | CSS-Tricks for some popular solutions for centering both horizontally and vertically.

Many developers opt for, having experienced these unintended side-effects - such as elements that are not floated appearing next to elements that are - a ‘clearfix’ solution to combat this problem. You can see an example of this here. I do not recommend this solution and, to be clear, this is evidently an issue that can be completely avoided by opting not to use floats in the first place (while there may be minor exceptions, I am personally yet to find a use for floats in my projects).

Nowadays there are a myriad of possible solutions, many of which were created solely to make it much, much easier to do rather trivial things such as center an element vertically, etc. Don’t be tempted, however, to opt for a more modern solution (such as Flexbox, CSS Transforms or using Javascript to calculate the intended positions of certain elements) without having already attempted a simpler method first (again - refer to the article above entitled ‘Centering in CSS’.)

TLDR; it’s not difficult. For the most part, you simply need to ensure that all immediate children are inline-block elements, and that you align the text center on the containing element.
