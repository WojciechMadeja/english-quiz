import ArrowLeft from '../../atoms/ArrowLeft/ArrowLeft';
import TextQuizAreaLeft from '../../atoms/TextQuizAreaLeft/TextQuizAreaLeft';
import { Wrapper } from './LeftAreaButton.styles';

function LeftAreaButton({ answer, statePoints, setPoints, stateLives, setLives }) {
    const buttonFunction = () => {
        if (answer === true){
            setPoints(statePoints + 1);
        }
        if (answer === false){
            setLives(stateLives - 1);
        }
    }
    return(
        <Wrapper onClick = {() => {buttonFunction();} }>
            <ArrowLeft />
            <TextQuizAreaLeft answer = { answer }/>
            
        </Wrapper>
    );
}

export default LeftAreaButton;