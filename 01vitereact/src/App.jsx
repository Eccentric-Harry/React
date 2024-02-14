import Harry from "./Harry"



function App() {
  // we know that this function return some HTML tags... so what if we wanted to return js code?
  const username = "EccentricHarry"
  return (
    <>
    <Harry/>
    <p>Heloooo {username}</p>
    <h2>hiiii</h2>
    </>
// this {} is called an evaluated expression. we should not write the enitre js here but only the evaulated outcome.
  )
}

export default App
