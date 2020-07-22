import React from 'react';

export default function CountBtn(props) {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => props.updateCounter(props.value + props.count)}
    >
      {props.value > 0 ? '+' + props.value : props.value}
    </button>
  );
}
