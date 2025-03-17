//Assignment #1 - Counter Application
//Create a simple counter application that increments and decrements a number when buttons are clicked.
//  The counter value should persist in local storage, so that when the page is refreshed, the counter value remains the same.

import CounterApp from "./CounterApp"; 

function App() {
  return(<div>
    <counter>Counter App</counter>
    <CounterApp/>
  </div>)
}

export default App