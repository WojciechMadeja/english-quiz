import ArrowLeft from '../../atoms/ArrowLeft/ArrowLeft';
import TextQuizAreaLeft from '../../atoms/TextQuizAreaLeft/TextQuizAreaLeft';
import { Wrapper } from './LeftAreaButton.styles';
// import {Howl, Howler} from 'howler';
// import click from '../../../assets/click.mp3'

function LeftAreaButton({ answer, statePoints, setPoints, stateLives, setLives }) {
    // var sound = new Howl({
    //     src: [ click ],
    //     autoplay: true,
    //     volume: 0.2,
    //   });
    const buttonFunction = () => {
        if (answer === true){
            setPoints(statePoints + 1);
            // sound.once('load', function(){
            //     sound.play();
            // });
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