# React
 // React wale se Kaise run hota hai?
 index.html file is located in the public foolder.
We have to create a object for ReactDOM model and render it. we can do many taks like taking input and updating the UI.

<App /> 
react hame JavaScript ko use karke HTMl tags to modify ya render karne deta hai.
jsx file ke roop me.

ek function lo, aur uske andar html code insert karo , aur use render kardo using react.

packages.json "dependecies" me scripts me react-scripts wala line is responsible for injecting the js code in the index.html


================================================================================================================

// vite@latest wale method se kaise karte hai?

index.html is located outside the public folder and the script src:main.jsx is injected inside the index.html file itself.

App.jsx ke return method me se bas ek tag ko return kar sakte hai. toh is problem ko solve karne ke liye, ek div ke ander wrap karte hai toh ise solve hum empty fragment se replace kar sakte hai.

====================
At the end of the day, humne jo custom react banaya hai use me domElement element is the result of react to convert the attributes type and store it in form of an object.

===========
so what have i learned is that, React is just a framework that is build upon js and we have the freedom to change create our own jsx or reeact

======= 02Counter ========
UI updation ko react control karta hai.
that means, if there is a variable that i used multiple time in the page, react has the capabilities to control to update every reference of that variable at once unlike js where we had to get element by id multiple times as required.

================================ 
## Virtual DOM, Fiber and Reconciliation
please read: 
### https://github.com/acdlite/react-fiber-architecture