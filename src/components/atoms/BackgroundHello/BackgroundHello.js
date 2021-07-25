import { Wrapper } from './BackgroundHello.styles'
import hello from '../../../assets/hello.png'
import Hello from '../../../assets/background'
function BackgroundHello() {
    return(
        <Wrapper src={ hello } />
    );
}

export default BackgroundHello;