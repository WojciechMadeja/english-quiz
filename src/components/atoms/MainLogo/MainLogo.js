import { Wrapper } from './MainLogo.styles'

import Logo from '../../../assets/logo.js'

function MainLogo({ stateButton }){

    return(
        <Wrapper stateButton = { stateButton } ><Logo /></Wrapper>
    );
}

export default MainLogo;