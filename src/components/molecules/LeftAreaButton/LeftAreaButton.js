import ArrowLeft from '../../atoms/ArrowLeft/ArrowLeft';
import TextQuizAreaLeft from '../../atoms/TextQuizAreaLeft/TextQuizAreaLeft';
import { Wrapper } from './LeftAreaButton.styles';

function LeftAreaButton({ statePoints, setPoints, stateLives, setLives }) {
    const buttonFunction = () => {
        setPoints(statePoints + 1);
        setLives(stateLives + 1);
    }
    return(
        <Wrapper onClick = {() => {buttonFunction();} }>
            <ArrowLeft className = "display"/>
            <TextQuizAreaLeft className = "display"/>
            
        </Wrapper>
    );
}

export default LeftAreaButton;