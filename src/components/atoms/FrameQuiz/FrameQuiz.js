import PictureQuiz from "../PictureQuiz/PictureQuiz";
import TekstPictureQuiz from "../TekstPictureQuiz/TekstPictureQuiz";
import { Wrapper } from "./FrameQuiz.styles";

function FrameQuiz({stateApiUrl}) {
    return(
        <>
        <Wrapper>
            <PictureQuiz stateApiUrl = { stateApiUrl } />
            <TekstPictureQuiz />
        </Wrapper>
        
        </>
    );
}

export default FrameQuiz;