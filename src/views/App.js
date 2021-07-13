import { View } from './App.styles'
import { useState } from 'react'
import BackgroundHello from '../components/atoms/BackgroundHello/BackgroundHello.js'
import StartTemplate from '../components/templates/StartTemplate/StartTemplate.js'


function App() {
  const [stateButton, setStateButton] = useState(false)
  return (
    <>
    <View>
      <BackgroundHello />
      <StartTemplate stateButton = { stateButton } setStateButton={ setStateButton } />
    </View>
    </>
  );
}

export default App;
