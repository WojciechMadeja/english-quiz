import './App.styles.js'
import { View } from './App.styles'
import back from '../assets/hello.png'
import logo from '../assets/logo.svg'
import { useState } from 'react'

function App() {
  const [stateButton, setStateButton] = useState(false)
  console.log(stateButton)
  return (
    <>
    <View>
      <img className="logo" src={ logo } />
      <img className="back" src={ back } />
      <div className="text">TEST <br /> YOUR <br /> KNOWLEDGE</div>
      <button className = { !stateButton ? "buttonInit" : "buttonInit buttonDown" } onClick= { () => setStateButton(!stateButton)} >START</button>
    </View>
    </>
  );
}

export default App;
