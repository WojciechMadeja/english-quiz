import styled, { keyframes }  from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`
const textFall = keyframes`
    0%{}
    30% { transform: rotate(45deg); }
    60% { transform: rotate(27deg); }
    80% { transform: rotate(40deg); }
    100% { transform: translateY(1000px) }`
export const Wrapper = styled.div`
    position: absolute;
    color: #ffffff;
    font-size: 60px;
    font-weight: bold;
    text-align: right;
    right: 50px;
    top: 50px;
    text-shadow: 3px 3px 5px rgba(0,0,0,0.75);
    opacity: ${ ({ stateButton }) => (!stateButton ? 0 : 1) };
    animation-name: ${ ({ stateButton }) => (!stateButton ? appear : textFall) };
    animation-fill-mode: forwards;
    animation-duration: 6s;
    animation-delay: 1s;
`

