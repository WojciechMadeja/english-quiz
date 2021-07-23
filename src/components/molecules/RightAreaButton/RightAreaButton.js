
import ArrowRight from '../../atoms/ArrowRight/ArrowRight';
import TextQuizAreaRight from '../../atoms/TextQuizAreaRight/TextQuizRight';
import { Wrapper } from './RightAreaButton.styles';

function RightAreaButton({ stateLives, setLives }) {
    return(
        <Wrapper onClick = {() => setLives(stateLives - 1) }>
            <TextQuizAreaRight />
            <ArrowRight />
        </Wrapper>
    );
}

export default RightAreaButton;