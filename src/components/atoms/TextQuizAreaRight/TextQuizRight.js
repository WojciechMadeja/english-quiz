import { Wrapper } from './TextQuizRight.styles';
import { useState, useEffect } from 'react';

function TextQuizAreaRight({ answer }) {
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

export default TextQuizAreaRight;