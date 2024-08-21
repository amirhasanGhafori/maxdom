import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(data=>data.value);
    const totalMaximum = Math.max(...dataPointsValues)
  return (
    <>
      <div className="flex flex-row gap-2 justify-between mt-8">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      </div>
    </>
  );
};

export default Chart;
