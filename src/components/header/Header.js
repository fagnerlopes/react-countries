import React, { Component } from "react";
import {formatNumber} from '../../helpers/formatHelpers.js';

export default class Header extends Component {

  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  }

  render() {
    const { filter, sumPopulation, countriesCount } = this.props;

    return (
      <div>
        <input type="text" value={ filter } onChange={ this.handleInputChange }/> |
        <span>Países: { countriesCount } </span> |
        <span>População: { formatNumber(sumPopulation) } </span> |
      </div>
    );
  }
}
