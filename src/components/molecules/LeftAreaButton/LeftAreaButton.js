import ArrowLeft from '../../atoms/ArrowLeft/ArrowLeft';
import TextQuizAreaLeft from '../../atoms/TextQuizAreaLeft/TextQuizAreaLeft';
import { Wrapper } from './LeftAreaButton.styles';

function LeftAreaButton({ statePoints, setPoints }) {
    return(
        <Wrapper onClick = {() => setPoints(statePoints + 1) }>
            <TextQuizAreaLeft />
            <ArrowLeft />
        </Wrapper>
    );
}

export default LeftAreaButton;