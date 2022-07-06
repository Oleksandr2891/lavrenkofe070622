import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../data.json";
import PartOfChart from "./PartOfChart";

const Chart = ({ clickButton }) => {
  // eslint-disable-next-line no-unused-vars
  const [newData, setNewData] = useState(data);
  const minNumberForRandom = 0;
  const maxNumberForRandom = 100;
  const dividerRorRandom = 10;

  function getRandomWidth(min, max) {
    return Math.round(Math.random() * (max - min) + min) / dividerRorRandom;
  }

  const createNewData = () => {
    return data.forEach((elem) => {
      return (elem.time = getRandomWidth(
        minNumberForRandom,
        maxNumberForRandom
      ));
    });
  };

  useEffect(() => {
    clickButton && createNewData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickButton]);

  return (
    <div>
      {data.map((item, idx) => (
        <PartOfChart
          clickButton={clickButton}
          key={item.name + idx}
          label={item.name}
          time={item.time}
          idx={idx}
          data={newData}
        />
      ))}
    </div>
  );
};

export default Chart;
