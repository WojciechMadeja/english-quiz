import ArrowLeft from "../../atoms/ArrowLeft/ArrowLeft";
import ArrowRight from "../../atoms/ArrowRight/ArrowRight";
import FrameQuiz from "../../atoms/FrameQuiz/FrameQuiz";
import PictureQuiz from "../../atoms/PictureQuiz/PictureQuiz";


function QuizMachine() {
    return(
        <>
        <ArrowLeft />
        <FrameQuiz />
        <ArrowRight />
        </>
    );
}

export default QuizMachine;