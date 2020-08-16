import React, { Component } from "react";
import css from "./InputFullSalary.module.css";

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newValue = +event.target.value;
    this.props.onChangeFilter(newValue);
  };

  render() {
    const { filter } = this.props;
    return (
      <div style={css} className={css.fullSalary}>
        <label htmlFor="inputSalary">Salário bruto</label>
        <input
          autoFocus
          id="inputSalary"
          value={filter}
          type="number"
          min="1000"
          step="100"
          name="salary"
          onChange={this.handleInputChange}
        ></input>
      </div>
    );
  }
}
