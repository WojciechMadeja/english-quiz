import styled, { keyframes } from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

export const Wrapper = styled.div`
    //position: absolute;
    z-index: 3;
    //top: 40%;
   // left: 20%;
    opacity: 0;
    animation-name: ${appear};
    animation-duration: 6s;
    animation-delay: 6s;
    animation-fill-mode: forwards;
`