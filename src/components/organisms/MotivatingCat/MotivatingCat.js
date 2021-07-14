import { Wrapper } from  './MotivatingCat.styles'
import CatButton from '../../atoms/CatButton/CatButton'
import { useState } from 'react'
import CatWindows from '../../molecules/CatWindows/CatWindows';
function MotivatingCat() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <Wrapper>
            <CatWindows isOpen={ isOpen } />
            <CatButton  isOpen={ isOpen } setIsOpen= { setIsOpen }/>
        </Wrapper>
    );

}

export default MotivatingCat;