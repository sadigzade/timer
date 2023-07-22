import React from "react";
import Button from "../../UI/Button/Button";
import { createTimerAnimator } from "../../utils/create-timer-animator";
import Input from "../../UI/Input/Input";

const Timer = () => {
  const refSpan = React.useRef<HTMLSpanElement>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [[h, m, s], setTime] = React.useState([0, 0, 0]);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const animateTimer = createTimerAnimator(setTime, setButtonDisabled);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInp = event.target.value;

    if (!isNaN(+valueInp.slice(-1)) && valueInp !== " ") {
      setInputValue(event.target.value);
    }
  };

  const onBlurInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.replace(/^0+/, ""));
  };

  const onClickButton = () => {
    const seconds = Number(inputValue);

    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds - hh * 3600) / 60);
    const ss = seconds - hh * 3600 - mm * 60;

    setButtonDisabled(true);
    setTime([hh, mm, ss]);
    animateTimer(seconds);
    setInputValue("");
  };

  return (
    <>
      <Input
        placeholder={"Seconds"}
        type={"text"}
        value={inputValue}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      <Button onClick={onClickButton} disabled={buttonDisabled} />

      <br />
      <br />

      <span ref={refSpan}>
        {h.toString().padStart(2, "0")}:{m.toString().padStart(2, "0")}:
        {s.toString().padStart(2, "0")}
      </span>
    </>
  );
};

export default Timer;
