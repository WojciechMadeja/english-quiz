import { Wrapper } from './BackgroundHello.styles'
import hello from '../../../assets/hello.png'

function BackgroundHello() {
    return(
        <Wrapper src= { hello } />
    );
}

export default BackgroundHello;