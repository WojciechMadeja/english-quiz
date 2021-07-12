import styled, { keyframes }  from 'styled-components';

const appear = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}`
const falling = keyframes`
    0% {transform: translateY(0px);}
    40% {transform: translateY(-20px);}
    100% {transform: translateY(1000px);}`
const moveLogo = keyframes`
    0% {opacity: 1; transform: translateX(0)}
    30% {opacity: 0; transform: translateX(0)}
    70% {opacity: 0; transform: translateX(740px);}
    100% {opacity: 1; transform: translateX(740px);}`
const textFall = keyframes`
    0%{}
    30% { transform: rotate(45deg); }
    60% { transform: rotate(27deg); }
    80% { transform: rotate(40deg); }
    100% { transform: translateY(1000px) }`
export const View = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index- -1;
    background-color: rgba(55,55,226,1);
    .back {
        position: absolute;
        width: 100vw;
        z-index: 0;
    }
    .logo {
        position: absolute;
        z-index: 2;
        margin-top: 50px;
        margin-left: 50px;
        opacity: 0;
        animation-name: ${ appear };
        animation-fill-mode: forwards;
        animation-duration: 6s;
        animation-delay: 1s;
    }
    .logoCenter {
        opacity: 1;
        animation-name: ${ moveLogo };
        animation-duration: 6s;
        animation-fill-mode: both;
    }
    .buttonInit {
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
        opacity: 0;
        animation-name: ${ appear };
        animation-fill-mode: forwards;
        animation-duration: 6s;
    }
    .buttonInit:hover {
        cursor: pointer;
    }
    .buttonDown {
        opacity: 1;
        animation-name: ${ falling };
        animation-duration: 1s;
    }
    .text {
        position: absolute;
        color: #ffffff;
        font-size: 60px;
        font-weight: bold;
        text-align: right;
        right: 50px;
        top: 50px;
        text-shadow: 3px 3px 5px rgba(0,0,0,0.75);
        opacity: 0;
        animation-name: ${ appear };
        animation-fill-mode: forwards;
        animation-duration: 6s;
        animation-delay: 1s;
    }
    .appearText {
        opacity: 1;
        animation-name: ${ textFall };

    }
}
`;

