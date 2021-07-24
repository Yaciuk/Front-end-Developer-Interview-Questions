---
title: CSS Questions
layout: layouts/page.njk
permalink: /questions/css-questions/index.html
---

* What is CSS selector specificity and how does it work?

What is Specificity? If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out. Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.

* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

There’s a major difference between the two.

CSS resets aim to remove all built-in browser styling. Standard elements like h1 - h6, p, strong, em end up looking exactly alike, having no decoration at all. You're then supposed to add all decoration yourself.
Normalize.css aims to make built-in browser styling consistent across browsers. Elements like h1 - h6 will appear bold, larger et cetera in a consistent way across browsers. You're then supposed to add only the difference in decoration your design needs.
— Source: What is the difference between Normalize.css and Reset CSS?

You can read a more detailed explanation here: About normalize.css – Nicolas Gallagher. The article also does an excellent job of describing the advantages of using Normalize.css over CSS resets. https://www.quora.com/Whats-the-difference-between-resetting-and-normalizing-CSS-Which-would-you-choose-and-why

Normalize. css is mainly a set of styles, based on what its author thought would look good, and make it look consistent across browsers. Reset basically strips styling from elements so you have more control over the styling of everything.

* Describe Floats and how they work.

In web design, page elements with the CSS float property applied to them are just like the images in the print layout where the text flows around them. Floated elements remain a part of the flow of the web page. This is distinctly different than page elements that use absolute positioning. https://css-tricks.com/almanac/properties/f/float/

The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning). https://developer.mozilla.org/en-US/docs/Web/CSS/float

* Describe z-index and how stacking context is formed.

The z-index property in CSS controls the vertical stacking order of elements that overlap. As in, which one appears as if it is physically closer to you. z-index only affects elements that have a position value other than static (the default).

Elements can overlap for a variety of reasons, for instance, relative positioning has nudged it over something else. Negative margin has pulled the element over another. Absolutely positioned elements overlap each other. All sorts of reasons.


Without any z-index value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning will always appear on top of elements with default static positioning. https://css-tricks.com/almanac/properties/z/z-index/

The Z-index is a property that allows the developer to stack elements in the CSS. It’s basically a 3-d property so it allows the developer to choose how close the element appears. This is how stacking context is formed. https://medium.com/@naedeshazer1/describe-z-index-and-how-stacking-context-is-formed-f947cfe17e69


* Describe BFC (Block Formatting Context) and how it works.

A Block Formatting Context(BFC) is part of the visual CSS rendering of a web page in which block boxes are laid out. The positioning scheme to which it belongs is normal flow.

https://medium.com/@ritz078/block-formatting-contexts-in-css-3a9555355019

A block formatting context is a part of a visual CSS rendering of a web page. It's the region in which the layout of block boxes occurs and in which floats interact with other elements. A block formatting context is created by at least one of the following: The root element of the document ( <html> ). 

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context#:~:text=A%20block%20formatting%20context%20is,document%20(%20).

https://css-tricks.com/almanac/properties/d/display/


* What are the various clearing techniques and which is appropriate for what context?

The clearfix, for those unaware, is a CSS hack that solves a persistent bug that occurs when two floated elements are stacked next to each other. When elements are aligned this way, the parent container ends up with a height of 0, and it can easily wreak havoc on a layout. All you might be trying to do is position a sidebar to the left of your main content block, but the result would be two elements that overlap and collapse on each other. To complicate things further, the bug is inconsistent across browsers. The clearfix was invented to solve all that. https://css-tricks.com/clearfix-a-lesson-in-web-development-evolution/



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
