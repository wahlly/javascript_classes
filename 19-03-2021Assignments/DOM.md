# Document Object Module.            
The way a document content is accessed and modified is called the Document Object Model, or DOM. **DOM** allows us to be able to manipulate HTML elements easily and effectively. We can achieve alot while manipulating the HTML with DOM such as, creating new elements, specifying an event listener, creating inline styles to elements in place of css and so much more.   

## Accessing HTML elements:
HTML elements in a document can be accessed using various selectors, some of which are;
1. **getElementById()** - this is used to target an element based on Id.

2. **getElementsByClass()** - this is used to target an element by class. This is mostly used as a multiple element while, the Id is used for single.

3. **querySelector()** - this was just introduced of recent alongside with ES6. It is  used in place of getElementById() and getElementsByClass() .   

4. **getElementByTag()** - this is used to select elements by their tags for those who are having.
    and so much more...

    When working with **DOM** most times, we cannot just inject things into our HTML document else, this might disfigure the structure of our page. For this reason, we can also create Html Elements and Classes using javascript before we can now append whatever Html we initially intended to inject into our HTML document.