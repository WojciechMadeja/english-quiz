import PictureQuiz from '../../atoms/PictureQuiz/PictureQuiz';
import QuizMachine from '../../organisms/QuizMachine/QuizMachine';
import StartTemplate from '../StartTemplate/StartTemplate';
function GameTemplate( ) {
    return(
        <>
        <StartTemplate stateButton = { true } />
        <QuizMachine />
        </>
    );
}

export default GameTemplate;