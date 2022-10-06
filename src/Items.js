import React from "react";
import Memory from "./Memory";

export default function Memories(props) {
  //Render from App properties
  return (
    <ul className="Memories">
      {props.items.map((items, index) => {
        return (
          <li key={index}>
            <Memory items={items} />
          </li>
        );
      })}
    </ul>
  );
}
