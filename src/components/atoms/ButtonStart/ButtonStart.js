import { Wrapper } from './ButtonStart.styles'


function ButtonStart({ stateButton, setStateButton }) {
    return(
        <Wrapper stateButton = { stateButton }  onClick= { () => setStateButton(!stateButton)} > START </Wrapper>
    );
}

export default ButtonStart;