import './App.styles.js'
import { View } from './App.styles'
import back from '../assets/hello.png'
import MainLogo from '../components/atoms/MainLogo/MainLogo'
import { useState } from 'react'
import StartText from '../components/atoms/StartText/StartText.js'
import BackgroundHello from '../components/atoms/BackgroundHello/BackgroundHello.js'

function App() {
  const [stateButton, setStateButton] = useState(false)
  return (
    <>
    <View>
      <BackgroundHello />
      <MainLogo stateButton = { stateButton } />
      <StartText stateButton = { stateButton } />
      <button className = { !stateButton ? "buttonInit" : "buttonInit buttonDown" } onClick= { () => setStateButton(!stateButton)} >START</button>
    </View>
    </>
  );
}

export default App;
