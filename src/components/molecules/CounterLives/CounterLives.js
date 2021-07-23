import { Wrapper } from "./CounterLives.styles";
import LivesIcon from '../../../assets/liveicon'


function CounterLives({ stateLives }) {
    return(
        <Wrapper><LivesIcon />{ stateLives } </Wrapper>
    );
}

export default CounterLives;