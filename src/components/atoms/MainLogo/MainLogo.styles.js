import styled, { keyframes }  from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`
const moveLogo = keyframes`
    0% {opacity: 1; transform: translateX(0)}
    30% {opacity: 0; transform: translateX(0)}
    70% {opacity: 0; transform: translateX(740px);}
    100% {opacity: 1; transform: translateX(740px);}`

export const Wrapper = styled.div`
    position: absolute;
    z-index: 2;
    margin-top: 50px;
    margin-left: 50px;
    opacity: ${ ({ stateButton }) => (!stateButton ? 0 : 1) };
    animation-name: ${ ({ stateButton }) => (!stateButton ? appear : moveLogo) };
    animation-fill-mode: forwards;
    animation-duration: 6s;
    animation-delay: 1s;`

