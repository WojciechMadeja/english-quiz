import { Wrapper } from './ButtonStart.styles';
import { Link } from 'react-router-dom';
import {Howl, Howler} from 'howler';
import start from '../../../assets/buttonstart.wav'

const buttonStart = new Howl({
    src: [ start ],
    autoplay: true,
    volume: 0.7,
});    
function ButtonStart({ stateButton, setStateButton }) {
    const clickStartButton = () =>{
        setStateButton(!stateButton);
        buttonStart.play();
        console.log('click');
    }
    return(
        <Link to="/game" ><Wrapper stateButton = { stateButton }  onClick= { () => clickStartButton } > START </Wrapper></Link>
    );
}

export default ButtonStart;