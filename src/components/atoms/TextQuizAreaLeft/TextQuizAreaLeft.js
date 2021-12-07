import { Wrapper } from './TextQuizAreaLeft.styles'
import { useState, useEffect } from 'react';

function TextQuizAreaLeft({ stateTextLeft }) {
    
        return(
            <Wrapper> { stateTextLeft } </Wrapper>
        );
}

export default TextQuizAreaLeft;