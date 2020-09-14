import React from "react";
import { connect } from "react-redux";
import timerActions from "../redux/timer/timerActions";

const StepSelector = ({ options, step, onChangeStep }) => (
  <label className="Label">
    Select step:
    <select
      className="Select"
      value={step}
      onChange={(event) => onChangeStep(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

const mapStateToProps = (state) => {
  return {
    step: state.timer.step,
  };
};

const mapDispatchToProps = {
  onChangeStep: timerActions.changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
