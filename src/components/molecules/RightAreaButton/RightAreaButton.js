
import ArrowRight from '../../atoms/ArrowRight/ArrowRight';
import TextQuizAreaRight from '../../atoms/TextQuizAreaRight/TextQuizRight';
import { Wrapper } from './RightAreaButton.styles';

function RightAreaButton({ stateLives, setLives, statePoints, setPoints }) {
    const buttonFunction = () => {
        setPoints(statePoints - 1);
        setLives(stateLives - 1);
    }
    return(
        <Wrapper onClick = {() => {buttonFunction(); } }>
            <ArrowRight />
            <TextQuizAreaRight />
        </Wrapper>
    );
}

export default RightAreaButton;