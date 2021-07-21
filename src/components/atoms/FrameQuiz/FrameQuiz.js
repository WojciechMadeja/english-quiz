import PictureQuiz from "../PictureQuiz/PictureQuiz";
import TekstPictureQuiz from "../TekstPictureQuiz/TekstPictureQuiz";
import { Wrapper } from "./FrameQuiz.styles";

function FrameQuiz(params) {
    return(
        <>
        <Wrapper>
            <PictureQuiz />
            <TekstPictureQuiz />
        </Wrapper>
        
        </>
    );
}

export default FrameQuiz;