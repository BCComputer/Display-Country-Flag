import { useEffect, useState } from 'react';
import './App.css';


function CountriesFlag() {
    
const [countries, setCountries ] = useState([]);
const [getDataStatus, setGetDataStatus]  = useState(false);
 const [removeData, setRemoveData]= useState(false);
const [display, setDisplay]= useState(undefined);
 
 
useEffect(()=>{
  if(getDataStatus){
    getData();
  }
  if(removeData){
    setCountries([]);
  }
  
},[getDataStatus, removeData]);

  const getData =   ()=>{
    const api =  fetch("https://restcountries.com/v3.1/all");
    api.then((result)=>{
      result.json().then((data)=>{
        console.log(data);
        setCountries(data);
      })
    });
  };

  const showRegion = (index)=>{
    if(index === display){
      setDisplay(undefined);
    }else{
      setDisplay(index);
    }
  }
 
  const changeRemoveDataState =()=>{
   
    if(getData){
      setGetDataStatus(!getDataStatus);
    }
    setRemoveData(!removeData);
  }
 
  const changeGetDataStatus =()=>{
    
    if(removeData){
      setRemoveData(!removeData);
    }
    setGetDataStatus(!getDataStatus);
  }
 
  return (
<div id= "mainBlock">
      <h1>Countries List</h1>
      <button onClick={()=>{changeGetDataStatus()}}>Fetch Countries</button>
      <button onClick={()=>{changeRemoveDataState()}}>Remove Countries Data</button>

  <div className="countries-grid">
        {countries.map((country) => (
          <div key={country.cca3} className="country">
            <p onClick={()=>{showRegion(country.cca3);}}>{ <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />}</p>
            <div className = "displayBlack">
            {display === country.cca3 ? <p style = {{color:"Black"}}>Country : {country.name.common}</p>: ""}
            {display === country.cca3 ? <p style = {{color:"Black"}}>Region : {country.region}</p>: ""}
            {display === country.cca3 ? <p style = {{color:"Black"}}>Capital : {country.capital}</p>: ""}
            {display === country.cca3 ? <p style = {{color:"Black"}}>Language : {country.languages.por}</p>: ""}
            {display === country.cca3 ? <p style = {{color:"Black"}}>Subregion : {country.subregion}</p>: ""}
            </div>
          </div>
        ))}
  </div>
 
</div>
)};
export default CountriesFlag