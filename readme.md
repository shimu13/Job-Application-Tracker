
                                      Answer to the questions


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:

getElementById: select one element by using Id and always return single element .

getElementsByClassName: select one element by using class and return multiple element .

querySelector: using CSS selector and return first matching element .

querySelectorAll: using CSS selector and return all matching element .






2. How do you create and insert a new element into the DOM?

Ans: first create element using createElement() and then add content after that insert using appendChild().



3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling means event goes from child to parent.

working procedure: 
If you click button inside div:

First its button runs then div runs after then body runs




4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation means using parent element to handle child event. Instead of adding event in every child, we add event in parent.




5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault(): Stops default browser action


stopPropagation(): Stops event bubbling



