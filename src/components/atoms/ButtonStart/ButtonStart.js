import { Wrapper } from './ButtonStart.styles';
import { Link } from 'react-router-dom';


function ButtonStart({ stateButton, setStateButton }) {
    return(
        <Link to="/game" ><Wrapper stateButton = { stateButton }  onClick= { () => setStateButton(!stateButton) } > START </Wrapper></Link>
    );
}

export default ButtonStart;