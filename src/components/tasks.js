import React from "react";
import { ListGroup } from "react-bootstrap";
const Tasks = ({ task, setTask, plotId, tasksType }) => {
  const arr = ["clusters", "distribution", "correlation"];
  let validTasks = [];
  if (plotId !== undefined) {
    validTasks = tasksType[plotId];
  }

  return (
    <>
      <h4>Task</h4>
      <ListGroup as="ul">
        {arr.map((ele) => {
          return (
            <ListGroup.Item
              onClick={() => {
                setTask(ele);
              }}
              key={ele}
              active={task === ele}
              disabled={!validTasks.includes(ele.toLowerCase())}
            >
              {ele}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Tasks;
