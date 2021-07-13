import { Wrapper } from './MainLogo.styles'

import logo from '../../../assets/logo.svg'

function MainLogo({ stateButton }){

    return(
        <Wrapper stateButton = { stateButton } logo src={ logo } />
    );
}

export default MainLogo;