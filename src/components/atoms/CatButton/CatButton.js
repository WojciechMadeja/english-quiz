import { Wrapper } from './CatButton.styles'
import CatIcon from '../../../assets/icon.js'

function CatButton({isOpen,setIsOpen}) {
    return(
        <Wrapper onClick={ ()=> { setIsOpen(!isOpen) }}><CatIcon /></Wrapper>
    )
}

export default CatButton;