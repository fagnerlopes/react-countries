import React, { Component } from "react";
import { formatNumber } from "../../helpers/formatHelpers.js";
import css from "./header.module.css";

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  render() {
    const { filter, sumPopulation, countriesCount } = this.props;

    return (
      <div className={css.statistics}>
        <input
          className={css.inputFilter}
          placeholder="Filtro"
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        />
        <span className={css.countryCount}>Países: {countriesCount} </span>
        <span className={css.sumPopulation}>
          {" "}
          População: <strong>{formatNumber(sumPopulation)}</strong>{" "}
        </span>
      </div>
    );
  }
}
