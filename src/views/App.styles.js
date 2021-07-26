import styled, { keyframes }  from 'styled-components';
import hello from '../assets/hello.png'

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

export const View = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(55,55,226,0);
    background-image: url(${hello});
    background-repeat: no-repeat;
`

