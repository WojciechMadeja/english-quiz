import './App.styles.js'
import { View } from './App.styles'
import back from '../assets/hello.png'
import logo from '../assets/logo.svg'
import { useState } from 'react'

function App() {
  const [stateButton, setStateButton] = useState(false)
  return (
    <>
    <View>
      <img className={ !stateButton ? "logo" : "logo logoCenter" } src={ logo } />
      <img className="back" src={ back } />
      <div className={ !stateButton ? "text" : "text appearText"}>TEST <br /> YOUR <br /> KNOWLEDGE</div>
      <button className = { !stateButton ? "buttonInit" : "buttonInit buttonDown" } onClick= { () => setStateButton(!stateButton)} >START</button>
    </View>
    </>
  );
}

export default App;
