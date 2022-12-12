const addCountry = (name)=>{

    let selectedCountry = checkStoredCountry();
    console.log(selectedCountry)

    if(name in selectedCountry){

        localStorage.setItem("countries" , JSON.stringify(selectedCountry));
     }
     else{
        selectedCountry[name] = 1;
        localStorage.setItem("countries" , JSON.stringify(selectedCountry));
     }

}


const checkStoredCountry = ()=>{

    let selectedCountry = {} ;

    const storedCountry = localStorage.getItem("countries");

    if(storedCountry){

        selectedCountry = JSON.parse(storedCountry);
    }

    return selectedCountry;

}

const loadCountries = ()=>{

    const loadedCountries = JSON.parse(localStorage.getItem("countries"));
    return loadedCountries;
}




export{
    addCountry,
    loadCountries
};