import React from "react";
import { ListGroup } from "react-bootstrap";
const Epsilon = ({ epsilon, setEpsilon }) => {
  const arr = [0.5, 0.1, 0.05, 0.01];

  return (
    <>
      <h4>Epsilon</h4>
      <ListGroup as="ul">
        {arr.map((ele) => {
          if (epsilon === ele) {
            return (
              <ListGroup.Item
                onClick={() => {
                  setEpsilon(ele);
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
                  setEpsilon(ele);
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

export default Epsilon;
