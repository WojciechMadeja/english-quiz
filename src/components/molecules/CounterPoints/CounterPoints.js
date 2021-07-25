import { Wrapper } from "./CounterPoints.styles";
import PointIcon from '../../../assets/pointicon'



function CounterPoints({ statePoints }) {
    return(
        <Wrapper><PointIcon /> { statePoints } </Wrapper>
    );
}

export default CounterPoints;