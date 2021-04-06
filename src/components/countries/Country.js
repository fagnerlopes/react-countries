import React, { Component } from 'react';
import css from './countries.module.css';

export default class Country extends Component {
  render() {
    const { country, key } = this.props;
    console.log(country);

    return (
      <div className={css.country}>
        <img src={country.flag} alt={country.name}/>
        {country.name}
      </div>
    )
  }
}
