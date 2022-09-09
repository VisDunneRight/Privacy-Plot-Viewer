import React from "react";
import { Col, Image } from "react-bootstrap";

const Results = ({ res, folder, dataRes }) => {
  if (res) {
    const firstHalf = res[0] + "_" + res[1] + "_";
    const secHalf = res[3] + "_" + res[4];
    console.log(firstHalf.toLowerCase() + secHalf);
    const study = dataRes.filter(
      (ele) => ele.Index === firstHalf.toLowerCase() + secHalf
    );

    return (
      <>
        <Col>
          <h4>Original</h4>
          <Image
            src={folder + res[0] + "_Binned_None_None_" + res[4] + ".png"}
            fluid
          />
        </Col>
        <Col>
          <h4>DAWA : {study[0].DAWA}</h4>
          <Image src={folder + firstHalf + "DAWA_" + secHalf + ".png"} fluid />
        </Col>
        <Col>
          <h4>AHP : {study[0].AHP}</h4>
          <Image src={folder + firstHalf + "AHP_" + secHalf + ".png"} fluid />
        </Col>
        <Col>
          <h4>LaPlace : {study[0].Laplace}</h4>
          <Image
            src={folder + firstHalf + "LaPlace_" + secHalf + ".png"}
            fluid
          />
        </Col>
      </>
    );
  } else {
    return <>Select from the top</>;
  }
};

export default Results;
