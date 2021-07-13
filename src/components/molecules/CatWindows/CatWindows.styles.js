import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    opacity: 1;
    z-index: 9;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 50px 100px rgba(0,0,0,0.45);
`