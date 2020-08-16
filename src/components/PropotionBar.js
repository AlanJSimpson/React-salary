import React, { Component } from "react";

export default class PropotionBar extends Component {
  render() {
    const {
      inss,
      irpf,
      netSalary,
      colorINSS,
      colorIRPF,
      colorNetSalary,
    } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: inss + "%",
            height: "20px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: colorIRPF,
            width: irpf + "%",
            height: "20px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: colorNetSalary,
            width: netSalary + "%",
            height: "20px",
          }}
        ></div>
      </div>
    );
  }
}
