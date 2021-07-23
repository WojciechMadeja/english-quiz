import styled, { keyframes } from 'styled-components';


const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

export const Wrapper = styled.div`
    font-family: 'Keania One', cursive;
    font-size: 170px;
    color: #d4040f;
    box-shadow: 11px 11px 22px 1px rgba(0,0,0,0.76);
    opacity: 0;
    animation-name: ${ appear };
    animation-fill-mode: forwards;
    animation-duration: 6s;
    animation-delay: 6s;

`