import './App.styles.js'
import { View } from './App.styles'
import back from '../assets/hello.png'
import logo from '../assets/logo.svg'

function App() {
  return (
    <>
    <View>
      <img className="logo" src={ logo } />
      <img className="back" src={ back } />
      <div className="text">TEST <br /> YOUR <br /> KNOWLEDGE</div>
      <button>START</button>
    </View>
    </>
  );
}

export default App;
