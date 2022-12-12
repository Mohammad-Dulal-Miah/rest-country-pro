import React from 'react';
import './Country.css';

const Country = ({country , addInformation}) => {

    const {capital , flags , name , population , region} = country;
    //console.log(country);

    return (
        <div className='country-container'>
            <h2><small>Name: {name.common}</small></h2>
            <img src={flags.png} alt=""/>
            <h3><small>Capital: {capital}</small></h3>
            <h3><small>Region: {region}</small></h3>
            <h4><small>Population: {population}</small></h4>
            <button onClick={()=> addInformation(country)}>Add country</button>
        </div>
    );
};

export default Country;

//country.capital
//country.flags.png
//country.name.common
//country.population
//country.region