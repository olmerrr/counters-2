import React from 'react';

export default function CountBtn(props) {
  return (
    <button
      type="button"
      class="btn btn-secondary"
      onClick={() => props.updateCounter(props.value + props.count)}
    >
      {props.value > 0 ? '+' + props.value : props.value}
    </button>
  );
}
