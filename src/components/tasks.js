import React from "react";
import { ListGroup } from "react-bootstrap";
const Tasks = ({ task, setTask }) => {
  const arr = ["Cluster", "Distribution", "Correlation"];

  return (
    <>
      <h4>Task</h4>
      <ListGroup as="ul">
        {arr.map((ele) => {
          if (task === ele) {
            return (
              <ListGroup.Item
                onClick={() => {
                  setTask(ele);
                }}
                key={ele}
                active
              >
                {ele}
              </ListGroup.Item>
            );
          } else {
            return (
              <ListGroup.Item
                onClick={() => {
                  setTask(ele);
                }}
                key={ele}
              >
                {ele}
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </>
  );
};

export default Tasks;
