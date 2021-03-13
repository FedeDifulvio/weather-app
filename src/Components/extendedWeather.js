import React,{ Fragment, useEffect, useState} from 'react' ;
import {Link} from 'react-router-dom'
import './extendedWeather.css'
import ExtendedWeatherCard from './extendedWeatherCard.js'


 const ExtendedWeather = () => {
   const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
   const [loanding, setLoanding] = useState(true);
   const city = localStorage.getItem("city");
   const country = localStorage.getItem("country");
   const kelvin = 273.15;
   let listArray = [];

   const traerClima = async () => {
     const APIkey = "337cb8efcec75a9a3df2a42bb251f8a9";
     const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIkey}`;
     const response = await fetch(URL);
     const datos = await response.json();
     setListArray(datos.list);
     setData(listArray);
     setLoanding(false);
   };

   const setListArray = (list) => {
     for (let i = 0; i < 9; i++) {
       listArray.push({
         temp: (list[i].main.temp - kelvin).toFixed(1),
         date: customDate(list[i].dt_txt),
         hum: list[i].main.humidity,
         icon: `http://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`,
         description: list[i].weather[0].description,
       });
     }
   };

   useEffect(() => {
     traerClima();
   }, []);

   const customDate = (string) => {
     const chars = string.split(" ");
     const hour = chars[1].split(":").splice(0, 1);
     const date = chars[0].split("-").splice(1, 2);
     const newDate = date[0] + "/" + date[1] + "  " + hour + ":00";
     return newDate;
   };

   return (
     <Fragment>
       <h1 className="ttle animate__animated animate__bounce">
         {city}, {country}{" "}
         <Link to="/" className="btn btn-warning back">
           Back
         </Link>
       </h1>
       <hr />
       <div className="container">
         <div className="row">
           {loanding ? (
             <Fragment>
               <div className="col md-3"></div>
               <h1 className="alert alert-info col md-3 centrado">
                 LOANDING...
               </h1>
               <div className="col md-3"></div>
               <div className="col md-3"></div>
             </Fragment>
           ) : (
             data.map((item, i) => (
               <div className="col-md-4" key={i}>
                 <ExtendedWeatherCard data={data[i]} />
               </div>
             ))
           )}
         </div>
       </div>
     </Fragment>
   );
 };

 export default ExtendedWeather;  
