import ArrowLeft from "../../atoms/ArrowLeft/ArrowLeft";
import ArrowRight from "../../atoms/ArrowRight/ArrowRight";
import FrameQuiz from "../../atoms/FrameQuiz/FrameQuiz";
import PictureQuiz from "../../atoms/PictureQuiz/PictureQuiz";
import TextQuizAreaLeft from "../../atoms/TextQuizAreaLeft/TextQuizAreaLeft";
import TextQuizAreaRight from "../../atoms/TextQuizAreaRight/TextQuizRight";


function QuizMachine() {
    return(
        <>
        <TextQuizAreaLeft />
        <ArrowLeft />
        <FrameQuiz />
        <ArrowRight />
        <TextQuizAreaRight />
        </>
    );
}

export default QuizMachine;