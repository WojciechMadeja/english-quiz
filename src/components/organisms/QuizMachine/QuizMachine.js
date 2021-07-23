import CounterLives from "../../molecules/CounterLives/CounterLives";
import CounterPoints from "../../molecules/CounterPoints/CounterPoints";
import FrameQuiz from "../../atoms/FrameQuiz/FrameQuiz";
import { useState } from 'react';
import LeftAreaButton from "../../molecules/LeftAreaButton/LeftAreaButton";
import RightAreaButton from "../../molecules/RightAreaButton/RightAreaButton";

function QuizMachine() {
    const [stateLives, setLives] = useState(3);
    const [statePoints, setPoints] = useState(0);
    return(
        <>
        <CounterLives stateLives = { stateLives } />
        <LeftAreaButton statePoints = { statePoints } setPoints = { setPoints } stateLives= { stateLives } setLives = { setLives } />
        <FrameQuiz />
        <RightAreaButton statePoints = { statePoints } setPoints = { setPoints } stateLives= { stateLives } setLives = { setLives }/>
        <CounterPoints statePoints = { statePoints }/>
        </>
    );
}

export default QuizMachine;