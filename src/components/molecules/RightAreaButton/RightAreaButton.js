
import ArrowRight from '../../atoms/ArrowRight/ArrowRight';
import TextQuizAreaRight from '../../atoms/TextQuizAreaRight/TextQuizRight';
import { Wrapper } from './RightAreaButton.styles';
import { Howl } from 'howler';
import trueAnswer from '../../../assets/true.mp3';
import wrongAnswer from '../../../assets/false.wav';

function RightAreaButton({ answer, stateLives, setLives, statePoints, setPoints, stateTextRight }) {
    const trueArrow = new Howl ({
        src: [ trueAnswer ],
        volume: 0.2,
    });
    const wrongArrow = new Howl ({
        src: [ wrongAnswer ],
        volume: 0.2,
        });
    const buttonFunction = () => {
        if (answer === true){
            setPoints(statePoints + 1);
            trueArrow.play();

        }
        if (answer === false){
            setLives(stateLives - 1);
            wrongArrow.play();
        }
    } 
    return(
        <Wrapper onClick = {() => { buttonFunction(); } }>
            <ArrowRight />
            <TextQuizAreaRight stateTextRight = { stateTextRight } />
        </Wrapper>
    );
}

export default RightAreaButton;