import React, { Component } from "react";
import css from "./InputFullSalary.module.css";
import { formatPercentage, formatMoney } from "../helpers/formatters";

export default class InputReadyOnly extends Component {
  render() {
    const { number, labelName, percentage, color = "black" } = this.props;

    const formattedPercentage =
      percentage > 0 ? `(${formatPercentage(percentage)})` : "";

    const formattedValue = `${formatMoney(number)} ${formattedPercentage}`;

    const id = "input" + labelName;

    return (
      <form className={css.formSalary}>
        <div className={css.magicBox}>
          <label htmlFor={id}>{labelName}:</label>
          <input
            style={{ color, fontWeight: "bold" }}
            className={css.inputForm}
            value={formattedValue}
            readOnly="true"
            id={id}
          ></input>
        </div>
      </form>
    );
  }
}
