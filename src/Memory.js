import React from "react";

export default function Memory(props) {
  // Render from Items properties
  return (
    <h2 className="Memory">
      {props.items.food} in {props.items.place} introduced by{" "}
      {props.items.friend} .
    </h2>
  );
}
