import ArrowLeft from '../../atoms/ArrowLeft/ArrowLeft';
import TextQuizAreaLeft from '../../atoms/TextQuizAreaLeft/TextQuizAreaLeft';
import { Wrapper } from './LeftAreaButton.styles';
import { Howl } from 'howler';
import trueAnswer from '../../../assets/true.mp3'
import wrongAnswer from '../../../assets/false.wav'

function LeftAreaButton({ answer, statePoints, setPoints, stateLives, setLives, stateTextLeft }) {
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
        <Wrapper onClick = {() => {buttonFunction();} }>
            <ArrowLeft />
            <TextQuizAreaLeft stateTextLeft = { stateTextLeft } />
            
        </Wrapper>
    );
}

export default LeftAreaButton;