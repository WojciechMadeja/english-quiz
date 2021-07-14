import { Wrapper } from './CatWindows.styles';
import CatPicture from '../../atoms/CatPicture/CatPicture';

function CatWindows({ isOpen }) {
    if(!isOpen) {
        return null;
    } else {
        return(
            <Wrapper>
                <CatPicture isOpen= { isOpen } />
            </Wrapper>
        );
    }
}

export default CatWindows;