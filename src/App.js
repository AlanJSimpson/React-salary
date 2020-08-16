import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadyOnly from "./components/InputReadyOnly";
import { calculateSalaryFrom } from "./helpers/salary";
import PropotionBar from "./components/PropotionBar";

const COLOR_INSS = "#e67e22";
const COLOR_IRPF = "#c0392b";
const COLOR_NET_SALARY = "#16a085";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      baseINSS: "",
      discountINSS: "",
      baseIRPF: "",
      discountIRPF: "",
      netSalary: "",
      percentINSS: "",
      percentIRPF: "",
      percentNetSalary: "",
    };
  }
  changedFilter = (newFilter) => {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = calculateSalaryFrom(newFilter);
    this.setState({
      filter: newFilter,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    });
  };

  render() {
    const {
      filter,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = this.state;
    return (
      <div>
        <h1>React Salário</h1>
        <InputFullSalary filter={filter} onChangeFilter={this.changedFilter} />
        <InputReadyOnly number={baseINSS} labelName={"Base INSS"} />
        <InputReadyOnly
          percentage={percentINSS}
          number={discountINSS}
          labelName={"Desconto INSS"}
          color={COLOR_INSS}
        />
        <InputReadyOnly number={baseIRPF} labelName={"Base IRPF"} />
        <InputReadyOnly
          percentage={percentIRPF}
          number={discountIRPF}
          labelName={"Desconto IRPF"}
          color={COLOR_IRPF}
        />
        <InputReadyOnly
          percentage={percentNetSalary}
          number={netSalary}
          labelName={"Salário liquido"}
          color={COLOR_NET_SALARY}
        />
        <PropotionBar
          inss={percentINSS}
          irpf={percentIRPF}
          netSalary={percentNetSalary}
          colorINSS={COLOR_INSS}
          colorIRPF={COLOR_IRPF}
          colorNetSalary={COLOR_NET_SALARY}
        />
      </div>
    );
  }
}
