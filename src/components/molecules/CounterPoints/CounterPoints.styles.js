import styled, { keyframes } from "styled-components";


const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

export const Wrapper = styled.div`
    position: absolute;
    z-index: 2;
    top: 50px;
    right: 50px;
    font-family: 'Keania One', cursive;
    font-size: 190px;
    color: #f7d500;
    text-shadow: 5px 5px 22px rgba(0,0,0,0.76);
    opacity: 0;
    animation-name: ${ appear };
    animation-fill-mode: forwards;
    animation-duration: 6s;
    animation-delay: 6s;
    `