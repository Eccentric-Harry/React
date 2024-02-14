import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>
        EccentricHarry!
      </h1>
    </div>
  )
}

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit Google!'
};
// this was an object literal.
// ye kaam kyu nhi kar raha tha? ths reason is we don't know what kinds of props the react developes used in order to accept it as a parameter in the render() also props in the reactElement!
// you understand right>?

const anotherElement = (
  <a href="https://google.com"> Visit Google!</a>
)
// this was a function

// jaise hamne { } braces ke under evaluated js expression likha tha, waise expression custom reactelement create karne ke samy bhi impose kar sakte hai.

const anotherUser = "EccentricHarry"


// now let us create the reactelemetn the way it should have done:
const react_Element = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click here to visit Google!',
  // we can write the evaluated js code here. 
  anotherUser
  // but please remember that we can not write the entire js code here but only the evaluated expressions. 
  // very important!!!

)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <MyApp />

  // anotherElement
  // react_Element
);