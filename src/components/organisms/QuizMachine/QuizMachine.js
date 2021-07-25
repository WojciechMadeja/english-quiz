import CounterLives from "../../molecules/CounterLives/CounterLives";
import CounterPoints from "../../molecules/CounterPoints/CounterPoints";
import FrameQuiz from "../../atoms/FrameQuiz/FrameQuiz";
import { useEffect, useState } from 'react';
import LeftAreaButton from "../../molecules/LeftAreaButton/LeftAreaButton";
import RightAreaButton from "../../molecules/RightAreaButton/RightAreaButton";

function QuizMachine() {
    const [stateLives, setLives] = useState(3);
    const [statePoints, setPoints] = useState(0);
    const rand = Boolean(Math.round(Math.random()));
    let answer1 = rand;
    let answer2 = !answer1;
    useEffect(()=>{
        answer1 = rand;
        answer2 = !answer1;
    },[]);
    return(
        <>
        <CounterLives stateLives = { stateLives } />
        <LeftAreaButton answer = { answer1 } statePoints = { statePoints } setPoints = { setPoints } stateLives= { stateLives } setLives = { setLives } />
        <FrameQuiz />
        <RightAreaButton answer = { answer2 } statePoints = { statePoints } setPoints = { setPoints } stateLives= { stateLives } setLives = { setLives }/>
        <CounterPoints statePoints = { statePoints }/>
        </>
    );
}

export default QuizMachine;