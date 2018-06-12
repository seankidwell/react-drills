import React from "react";
import Todo from "./Todo";

export default function List(props) {
  let list = props.task.map((e, i) => {
    return <Todo key={i} task={e} />;
  });
  return <div>{list}</div>
}
