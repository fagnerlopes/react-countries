import React, { Component } from "react";

export default class Header extends Component {

  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  }

  render() {
    const { filter } = this.props;

    return (
      <div>
        <input type="text" value={ filter } onChange={ this.handleInputChange }/> |
        <span>Países: { this.props.countriesCount } </span> |
        <span>População: { this.props.sumPopulation } </span> |
      </div>
    );
  }
}
