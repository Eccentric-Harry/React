# React
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