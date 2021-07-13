import { Styled } from './MainLogo.styles'

import logo from '../../../assets/logo.svg'

function MainLogo({ stateButton }){
    console.log(stateButton);
    return(
        <Styled stateButton = { stateButton } logo src={ logo } />
    );
}

export default MainLogo;