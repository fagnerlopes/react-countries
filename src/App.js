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
      sumPopulation: 0,
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

    const sumPopulation = this.sumPopulationFrom(allCountries);     

    this.setState({
      allCountries: allCountries,
      filteredCountries: Object.assign([], allCountries),
      sumPopulation,
    });
  }

  sumPopulationFrom = (countries) => {
    const sumPopulation = countries.reduce((acc, cur) => {
      return acc + cur.population;
    }, 0);

    return sumPopulation;
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter(country => {
      return country.filterName.includes(filterLowerCase);
    });

    const sumPopulation = this.sumPopulationFrom(filteredCountries);    

    this.setState({
      filteredCountries,
      sumPopulation,
    });
  };

  render() {
    const { filteredCountries, filter, sumPopulation } = this.state;
    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header 
          countriesCount={ filteredCountries.length } 
          filter={filter} 
          onChangeFilter={this.handleChangeFilter} 
          sumPopulation={ sumPopulation }
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
