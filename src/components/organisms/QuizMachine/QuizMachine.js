import CounterLives from "../../molecules/CounterLives/CounterLives";
import CounterPoints from "../../molecules/CounterPoints/CounterPoints";
import FrameQuiz from "../../atoms/FrameQuiz/FrameQuiz";
import { useEffect, useState } from "react";
import LeftAreaButton from "../../molecules/LeftAreaButton/LeftAreaButton";
import RightAreaButton from "../../molecules/RightAreaButton/RightAreaButton";
import axios from "axios";

function QuizMachine() {
  const randomBoolean = () => Math.random() >= 0.5;
  const [stateLives, setLives] = useState(3);
  const [statePoints, setPoints] = useState(0);
  const [stateApiName, setApiName] = useState("");
  const [stateApiUrl, setApiUrl] = useState("");
  const [stateTextLeft, setTextLeft] = useState("");
  const [stateTextRight, setTextRight] = useState("");
  const [stateArrowLeft, setArrowLeft] = useState(randomBoolean());
  const [stateArrowRight, setArrowRight] = useState(!stateArrowLeft);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("data.json");
        const rand2 = Math.floor(Math.random() * result.data.object.length) - 1;
        let answer;
        if (rand2 < 0) {
          answer = 0;
        } else {
          answer = rand2;
        }
        console.log(rand2);
        console.log(answer);
        setApiName(result.data.object[answer].name);
        setApiUrl(result.data.object[answer].url);
        setArrowLeft(randomBoolean());
        setArrowRight(stateArrowLeft);
        if (stateArrowLeft === true) {
          setTextLeft(stateApiName);
        }
        if (stateArrowLeft === false) {
          setTextLeft("Tot");
        }
        if (stateArrowRight === true) {
          setTextRight(stateApiName);
        }
        if (stateArrowRight === false) {
          setTextRight("Tot");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [statePoints, stateLives]);

  return (
    <>
      {stateApiUrl && setApiName ? (
        <>
          <CounterLives stateLives={stateLives} />
          <LeftAreaButton
            answer={stateArrowLeft}
            statePoints={statePoints}
            setPoints={setPoints}
            stateLives={stateLives}
            setLives={setLives}
            stateTextLeft={stateTextLeft}
          />
          <FrameQuiz stateApiUrl={stateApiUrl} />
          <RightAreaButton
            answer={stateArrowRight}
            statePoints={statePoints}
            setPoints={setPoints}
            stateLives={stateLives}
            setLives={setLives}
            stateTextRight={stateTextRight}
          />
          <CounterPoints statePoints={statePoints} />
        </>
      ) : (
        "Zetrwej"
      )}
    </>
  );
}

export default QuizMachine;
