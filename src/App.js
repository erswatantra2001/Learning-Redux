import React from 'react'
import "./App.css";
import User from './components/User';

const App = () => {
  return (
    <div className="App">
      <User data = {{name:"swatantra gupta", age: 23}} />
    </div>
  )
}

export default App