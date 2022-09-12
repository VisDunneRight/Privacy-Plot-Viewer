import "./App.css";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Plots from "./components/plots";
import Epsilon from "./components/epsilon";
import Tasks from "./components/tasks";
import Results from "./components/results";
import BinSize from "./components/binsize";

import * as d3 from "d3";
import data from "./components/answersParsed.csv";

function App() {
  const [plotId, setPlotId] = useState(undefined);
  const [binSize, setBinSize] = useState(undefined);
  const [epsilon, setEpsilon] = useState(undefined);
  const [task, setTask] = useState(undefined);
  const [results, setResults] = useState(undefined);
  const [folder, setFolder] = useState(undefined);
  const [dataRes, setDataRes] = useState(undefined);
  const [tasksType, setTasksType] = useState(undefined);

  useEffect(() => {
    console.log(plotId, binSize, epsilon, task);
    if (
      plotId === undefined ||
      binSize === undefined ||
      epsilon === undefined ||
      task === undefined
    ) {
      console.log("Shouldn't be here");
      return;
    }

    if (!tasksType[plotId].includes(task.toLowerCase())) {
      setTask(undefined);
      return;
    }
    setFolder("Data/Final/Chart" + plotId + "/");
    const resArray = [plotId, task, "{0}", epsilon, binSize];
    setResults(resArray);
  }, [plotId, binSize, epsilon, task, tasksType]);

  useEffect(() => {
    d3.csv(data).then(function (data) {
      setDataRes(data);
    });
    fetch("Data/tasks.json")
      .then((res) => {
        return res.json();
      })
      .then((jsonFile) => {
        setTasksType(jsonFile);
      });
  }, []);
  console.log(plotId, binSize, epsilon, task, folder, results);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Plots setPlot={setPlotId} plotId={plotId} />
        </Col>
        <Col md={2}>
          <BinSize setBinSize={setBinSize} binSize={binSize} />
        </Col>
        <Col md={2}>
          <Epsilon setEpsilon={setEpsilon} epsilon={epsilon} />
        </Col>
        <Col md={2}>
          <Tasks
            setTask={setTask}
            task={task}
            plotId={plotId}
            tasksType={tasksType}
          />
        </Col>
      </Row>
      <Row>
        <Results res={results} folder={folder} dataRes={dataRes} />
      </Row>
    </Container>
  );
}

export default App;
