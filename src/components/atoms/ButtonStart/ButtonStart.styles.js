import styled, { keyframes }  from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`

const falling = keyframes`
    0% {transform: translateY(0px);}
    40% {transform: translateY(-20px);}
    100% {transform: translateY(1000px);}`

export const Wrapper = styled.button`
    position: absolute;
    width: 668px;
    height: 138px;
    border-radius: 30px;
    z-index: 3;
    left: 32vw;
    top: 65vh;
    font-size: 3em;
    font-weight: bold;
    color: #ffffff;  
    background: linear-gradient(0.25turn, #b30000cd 25%, #b3008ccd);
    text-shadow: 3px 3px 5px rgba(0,0,0,0.75);
    box-shadow: 11px 11px 22px 1px rgba(0,0,0,0.76);
    opacity: ${ ({ stateButton }) => (!stateButton ? 0 : 1) };
    animation-name: ${ ({ stateButton }) => (!stateButton ? appear : falling) };
    animation-fill-mode: forwards;
    animation-duration: ${ ({ stateButton }) => (!stateButton ? "6s" : "1s") };
    &:hover {
        cursor: pointer;
    }
`