---
layout: page
---

<p class="intro">Build visually appealing sites with topify.js and CSS3.</p>

Notice the arrow in the lower right corner as you scroll down the page. That simple button is what inspired topify.js. And its as simple as one line of code.

    $('#to-the-top').topify();

But wait... The fun doesn't stop there. topify.js works by adding/removing a class based on the current scroll position. You can customize the default behavior of topify.js by specifying element to watch, an offset, class to add, and if the element should be clickable. For the time being clickable elements result in an animated scroll to the top of the page.

> Developers! Developers! Developers! Developers!
> <figure>- Steve Ballmer</figure>

The blockquote above is as simple as the following code.

    $('blockquote').topify({
        el: $('blockquote').prev(),
        offset: 300,
        classToAssign: 'slideUp',
        clickable: false
    });