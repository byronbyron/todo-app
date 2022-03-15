import React from "react";

export default function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="sr-only">Show </span>
      <span>{props.name}</span>
      <span className="sr-only"> todos</span>
    </button>
  );
}
