import React from "react";
import "./Diagram.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "pie",
    backgroundColor: "#4E4E4E",
    width: 550,
  },
  credits: {
    text: "Илья Шнырев",
    href: "",
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      showInLegend: true,
      startAngle: 158.5,
    },
  },
  title: {
    verticalAlign: "middle",
    text: 215,
    y: 15,
    x: 4,
    style: {
      fontSize: 52,
      fontWeight: "900",
      color: "rgba(255, 255, 255, 0.96)",
      fontFamily: "Helvetica",
    },
  },
  subtitle: {
    verticalAlign: "middle",
    text: "133 (+74)\n82",
    x: 2,
    y: 32,
    useHTML: true,
    style: {
      fontSize: "20px",
      fontWeight: "500",
      fontFamily: "Helvetica",
      color: "rgba(255, 255, 255, 0.56)",
      whiteSpace: "pre-wrap",
    },
  },
  legend: {
    itemStyle: {
      color: "rgba(255, 255, 255, 0.8)",
      fontFamily: "Helvetica",
      fontSize: 17,
    },
    itemHoverStyle: {
      color: "rgba(255, 255, 255, 1)",
    },
  },
  series: [
    {
      size: "80%",
      innerSize: "80%",
      borderColor: "none",
      dataLabels: {
        formatter: function () {
          return this.point.percentage + "%";
        },
        y: -13,
        connectorColor: "white",
        connectorWidth: 1.5,
        // для черточки между графиком и значением в %
        connectorShape: function (labelPosition, connectorPosition, options) {
          const connectorPadding = options.connectorPadding,
            touchingSliceAt = connectorPosition.touchingSliceAt,
            alignment = labelPosition.alignment;

          return [
            "M",
            labelPosition.x +
              (alignment === "left" ? 1 : -1) * connectorPadding,
            labelPosition.y,
            "L",
            touchingSliceAt.x - (alignment === "left" ? -10 : 10),
            touchingSliceAt.y,
          ];
        },
        style: {
          fontSize: 30,
          color: "#fff",
          fontFamily: "Helvetica",
        },
      },
      data: [
        { name: "Зашифровано", y: 62, color: "#77954D" },
        { name: "Не зашифровано", y: 38, color: "#979797" },
      ],
    },
  ],
};

const Diagram = () => {
  return (
    <div className="diagram">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Diagram;
