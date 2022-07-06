import React from "react";

const PartOfChart = ({ label, time, data, idx, clickButton }) => {
  const times = data.map((item) => item.time * 10);
  const count = times.reduce((acc, num) => acc + num, 0);
  const width = times.map((item) => Math.round((item * 100) / count));

  return (
    <div className="wrapperItemOfChart">
      <p>{label}</p>
      <div className="wrapperPartOfChart">
        {width?.map((elem, idxChart) => (
          <div
            key={label + idxChart}
            className="partOfChart"
            style={{
              width: `${elem}%`,
              backgroundColor: `${idx === idxChart && "red"}`,
            }}
          >
            {idx === idxChart && time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartOfChart;
