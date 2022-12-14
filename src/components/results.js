import React from "react";

import { MyImg, MyCol } from "./style.js";

const Results = ({ res, folder, dataRes }) => {
  if (res) {
    // console.log(res[1]);
    let firstHalf = res[0] + "_" + res[1] + "_";
    const secHalf = res[3] + "_" + res[4];
    firstHalf = firstHalf.toLowerCase();

    const study = dataRes.filter((ele) => ele.Index === firstHalf + secHalf);

    return (
      <>
        <MyCol>
          <h4>Original</h4>
          <MyImg
            src={folder + res[0] + "_Binned_None_None_" + res[4] + ".png"}
            fluid
          />
        </MyCol>
        <MyCol>
          <h4>DAWA : {study[0].DAWA}</h4>
          <MyImg src={folder + firstHalf + "DAWA_" + secHalf + ".png"} fluid />
        </MyCol>
        <MyCol>
          <h4>AHP : {study[0].AHP}</h4>
          <MyImg src={folder + firstHalf + "AHP_" + secHalf + ".png"} fluid />
        </MyCol>
        <MyCol>
          <h4>AGrid : {study[0].AGrid}</h4>
          <MyImg src={folder + firstHalf + "AGrid_" + secHalf + ".png"} fluid />
        </MyCol>
        <MyCol>
          <h4>Geometric : {study[0].Geometric}</h4>
          <MyImg
            src={folder + firstHalf + "Geometric_" + secHalf + ".png"}
            fluid
          />
        </MyCol>
        <MyCol>
          <h4>LaPlace : {study[0].Laplace}</h4>
          <MyImg
            src={folder + firstHalf + "Laplace_" + secHalf + ".png"}
            fluid
          />
        </MyCol>
      </>
    );
  } else {
    return <>Select from the top</>;
  }
};

export default Results;
