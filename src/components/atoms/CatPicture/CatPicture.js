import { Wrapper } from './CatPicture.styles'
import cat from '../../../assets/cat.jpeg'


function CatPicture({ isOpen }) {
    return(
        <Wrapper src= { cat } ></Wrapper>
    );
}


export default CatPicture;