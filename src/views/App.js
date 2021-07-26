import { View } from './App.styles'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BackgroundHello from '../components/atoms/BackgroundHello/BackgroundHello'
import StartTemplate from '../components/templates/StartTemplate/StartTemplate'
import GameTemplate from '../components/templates/GameTemplate/GameTemplate'
import MotivatingCat from '../components/organisms/MotivatingCat/MotivatingCat'


function App() {
  const [stateButton, setStateButton] = useState(false)
  return (
    <>
    <View>
      <BackgroundHello />
      <Router>
        <Switch>
          <Route exact path="/english-quiz">
            <StartTemplate stateButton = { stateButton } setStateButton={ setStateButton } />
          </Route>
          <Route path="/game">
            <GameTemplate stateButton = { stateButton } />
          </Route>
        </Switch>
      </Router>
      <MotivatingCat />
    </View>
    </>
  );
}

export default App;
