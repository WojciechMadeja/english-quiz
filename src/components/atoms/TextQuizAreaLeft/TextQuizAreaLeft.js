import { Wrapper } from './TextQuizAreaLeft.styles'
import { useEffect } from 'react';

function TextQuizAreaLeft({ answer }) {
    if (answer === true){
        return(
            <Wrapper> ELEPHANT </Wrapper>
        );
    }if (answer === false) {
        return(
            <Wrapper> TIGER </Wrapper>
        );
    }
}

export default TextQuizAreaLeft;