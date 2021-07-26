import { Wrapper } from './TextQuizAreaLeft.styles'
import { useState, useEffect } from 'react';

function TextQuizAreaLeft({ answer }) {
    const [text, setText] = useState('');
    useEffect(() => {
        if (answer === true){
            setText('ELEPHANT');
        }if (answer === false) {
            setText('TIGER');
    }}, [answer]);
    
        return(
            <Wrapper> {text} </Wrapper>
        );
}

export default TextQuizAreaLeft;