import React, { useState } from 'react';
import './WeatherApp.css'

import search_icon from "../Assets/search.png";
import search_icon from "../Assets/clear.png";
import search_icon from "../Assets/cloud.png";
import search_icon from "../Assets/drizzle.png";
import search_icon from "../Assets/humidity.png";
import search_icon from "../Assets/rain.png";
import search_icon from "../Assets/snow.png";
import search_icon from "../Assets/wind.png";

const WeatherApp = () => {

  let api_key ="08f3633e5b74c693ed9eeb1e214628d9";

  const [wicon,setWicon] =useState (cloud_icon);
  
  const search = async () => {
    const element =document.getElementsByClassName (" cityinput")
    if (element[0].value==="")
  {
    return 0;
  }
 let url = 'https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}'
  }

  let reponse =  fetch (url);
  let data = reponse.json();
  const humidity =document.getElementsByClassName("humidity-percent")
  const wind =document.getElementsByClassName("wind-rate")
  const temperature =document.getElementsByClassName("")
  const loaction =document.getElementsByClassName ("weather-location")

  humidity[0].innerHTML = data.main.humidity+"%";
  wind[0].innerHTML = data.wind.speed+"km/h";
  temperature[0].innerHTML = data.main.temp+"•c";
  location [0].innerHTML = data.name;



  return (
    <div className='container'>
    <div className= "top-bar">
        <input type="text" className='cityInput'placeholder='Search'/>
        <div className='search-icon'>
        <img src= {""} alt={""}/>

        </div>
       </div>
      <div className="weather-image">
        <img src={cloud_icon} alt=""/>
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weatheer-location">London</div>
      < div className="data-container"></div>
        <div className="elements">
          <img src={humidity_icon} alt="" className= "icon" />
          <div className="data">
          < div className="humidity-percent">64%</div>
          <div className="text">Humidity</div>
         </div>
        </div>
        <div className="elements">
          <img src={wind_icon}alt="" className= "icon" />
          <div className="data">
          < div className="humidity-percent">18 km/h</div></div>
          <div className="text">Wind Speed</div>
      </div>
    </div>
  );
};

export default WeatherApp
