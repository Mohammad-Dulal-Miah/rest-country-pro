import React, { useEffect, useState } from 'react';
import { addCountry, loadCountries } from '../../database/localDb';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries , setCountries] = useState([]);
    const [sCountry , setSCountry] = useState([]);


    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=> setCountries(data))
    },[]);


    useEffect(()=>{

        const countriesObj = loadCountries();
        let stories = [];
        for(const id in countriesObj){

            const data = countries.find(country => country.name.common === id);
            if(data){
                stories.push(data);
            }

        }

        setSCountry(stories);

    },[countries])


    const updateCountry = ()=>{

        const countriesObj = loadCountries();
        let stories = [];
        for(const id in countriesObj){

            const data = countries.find(country => country.name.common === id);
            if(data){
                stories.push(data);
            }

        }

        setSCountry(stories);
    }



    const addInformation = (county)=>{

       
        addCountry(county.name.common);
        updateCountry();
    }

    return (
       <div>
       <div className='top-bar'>
         <h1>Total countries : {countries.length}</h1>
         <h2>Selected country: {sCountry.length}</h2>
       </div>
       
         <div className='countries-container'>
            
            {
                countries.map(country => <Country country={country} addInformation={addInformation} key={country.cca3}></Country>)
            }
        </div>
       </div>
    );
};

export default Countries;