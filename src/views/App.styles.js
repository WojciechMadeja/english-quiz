import styled, { keyframes }  from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`
const falling = keyframes`
    0% {transform: translateY(0px);}
    40% {transform: translateY(-20px);}
    100% {transform: translateY(1000px);}`
export const View = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(55,55,226,1);
`

