1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
_ in the upper side all the methods calls, DOM -we mean Document Object Method. we can asscee any html elements by these methods for customizing or for making web dynamic.
_difference is: 
*getElementById: when we need to call the an element ones on that reason we set an id in an element and then we use it in various purpose.
*getElementsByClassName: we use it as a css class in a lot elements. and we use it in DOM with getElementsByClassName its provide an array like object and if we need any single one of them. we make it in loop then take one and we use.
*querySelector: its actually provide a single element where we use it. while calling it we add an string inside the first bracket("") and then we put there css icon like dot. or # for id and clss.
*querySelectorAll: its similar to querySelector but its provide and array including a pairs of elements.

2.How do you create and insert a new element into the DOM?
_we creat and element in DOM with document.createElement() with this methods. and then we insert it with appendChild() method.

3.What is Event Bubbling and how does it work?
_Event Bubbling is like a bubble, seems like it climed up into a tree. its actually move up to next parent element from the child Elements. in this process we can find an element from child to parent for using.

4.What is Event Delegation in JavaScript? Why is it useful?
_its actually the reverse version fo Event Bubbling. its works from parent to child.
we use it for find and using element by DOM method in JavaScript.

5.What is the difference between preventDefault() and stopPropagation() methods?
_preventDefault() is use for stop loading of a website. its works in a click of a button. we use preventDefault() in a addEventListener with the parameter.
_stopPropagation() its works with a condition. we use it in a javascript condition. for stop the condition if its based with stopPropagation.
normally when we have a some condition in a same loop or in same events we use it there for stoping the committed condition.

<!-- দোয়া চাই, কোন কপি পেস্ট করিনি। আপনাদের সহযোগিতায় যত টুকু অর্জন করতে পেরেছি -->
