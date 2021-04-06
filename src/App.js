import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    this.setState({
      allCountries: allCountries,
      filteredCountries: allCountries,
    });
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filteredCountries = this.state.allCountries.filter(country => {
      return country.filterName.includes(newText.toLowerCase());
    });

    this.setState({
      filteredCountries: filteredCountries,
    });
  };

  render() {
    const { filteredCountries, filter } = this.state;
    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header filter={filter} onChangeFilter={this.handleChangeFilter} />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
