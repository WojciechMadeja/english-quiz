import { Wrapper } from './CatPicture.styles';
import { useState, useEffect } from 'react';
import loading from '../../../assets/loading.png'
import axios from 'axios';


function CatPicture({ isOpen }) {
    const [stateLink, setLink] = useState(loading)
    useEffect(()=>{
        (async ()=> {
            try {
                const result = await axios.get('https://aws.random.cat/meow');
                setLink(result.data.file);
    
            } catch (error) {
                console.log(error);
            }
        })();
    },[isOpen])
    return(
        <>
        <Wrapper src= { stateLink } ></Wrapper>
        </>
    );
}


export default CatPicture;