
import ArrowRight from '../../atoms/ArrowRight/ArrowRight';
import TextQuizAreaRight from '../../atoms/TextQuizAreaRight/TextQuizRight';
import { Wrapper } from './RightAreaButton.styles';

function RightAreaButton({ answer, stateLives, setLives, statePoints, setPoints }) {
    const buttonFunction = () => {
        if (answer === true){
            setPoints(statePoints + 1);
        }
        if (answer === false){
            setLives(stateLives - 1);
        }
        
    }
    return(
        <Wrapper onClick = {() => { buttonFunction(); } }>
            <ArrowRight />
            <TextQuizAreaRight answer = { answer } />
        </Wrapper>
    );
}

export default RightAreaButton;