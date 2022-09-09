import React from "react";
import { ListGroup } from "react-bootstrap";
const BinSize = ({ binSize, setBinSize }) => {
  const arr = [32, 64];

  return (
    <>
      <h4>Bin Size</h4>
      <ListGroup as="ul">
        {arr.map((ele) => {
          if (binSize === ele) {
            return (
              <ListGroup.Item
                onClick={() => {
                  setBinSize(ele);
                }}
                active
                key={ele}
              >
                {ele}
              </ListGroup.Item>
            );
          } else {
            return (
              <ListGroup.Item
                onClick={() => {
                  setBinSize(ele);
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

export default BinSize;
