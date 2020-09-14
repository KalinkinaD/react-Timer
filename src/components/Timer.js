import React from "react";
import { connect } from "react-redux";
import timerActions from "../redux/timer/timerActions";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className="TimerContainer">
    <button type="button" onClick={() => onDecrement(step)} className="Btn">
      &#8722;
    </button>

    <div className="TimerValue">{value} minutes</div>
    <button type="button" className="Btn" onClick={() => onIncrement(step)}>
      &#43;
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    value: state.timer.value,
    step: state.timer.step,
  };
};

// const mapDispatchToprops = dispatch => {
//   return {
//     onIncrement: value => dispatch(timerActions.increment(value)),
//     onDecrement: value => dispatch(timerActions.decrement(value)),
//   };
// };

const mapDispatchToprops = {
  onIncrement: timerActions.increment,
  onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToprops)(Timer);
