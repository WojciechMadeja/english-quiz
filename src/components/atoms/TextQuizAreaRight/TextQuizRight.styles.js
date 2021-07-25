import styled, { keyframes } from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

export const Wrapper = styled.div`
    z-index: 3;
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 100px;
    opacity: 0;
    animation-name: ${appear};
    animation-duration: 6s;
    animation-delay: 6s;
    animation-fill-mode: forwards;
`