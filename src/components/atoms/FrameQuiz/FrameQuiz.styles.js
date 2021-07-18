import styled, { keyframes } from "styled-components";

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

export const Wrapper = styled.div`
    position: absolute;
    height: 500px;
    width: 450px;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    opacity: 0;
    animation-name: ${appear};
    animation-duration: 6s;
    animation-delay: 6s;
    animation-fill-mode: forwards;


`