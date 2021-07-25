import { Wrapper } from './TextQuizRight.styles';
function TextQuizAreaRight({ answer }) {
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

export default TextQuizAreaRight;