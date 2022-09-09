import React from "react";
import { Row } from "react-bootstrap";
import { MyImg, MyCol } from "./style.js";

const Plots = ({ plotId, setPlot }) => {
  return (
    <>
      <h4>Plots</h4>
      <Row>
        {Array.from(Array(20), (e, i) => {
          return (
            <MyCol xs={3} key={i}>
              <MyImg
                src={"Data/Original/" + i + ".png"}
                fluid
                onClick={() => {
                  setPlot(i);
                }}
                selected={plotId === i ? true : false}
              />
            </MyCol>
          );
        })}
      </Row>
    </>
  );
};

export default Plots;
