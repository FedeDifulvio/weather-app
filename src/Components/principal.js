import React from 'react'
import {Link} from 'react-router-dom'
import Form from './Form'
import WeatherCard from './weather-card'


class Principal extends React.Component {
  state = {
    city: "",
    countryCode: "",
    temperature: "",
    description: "",
    icon: "",
    error: "",
    loanding: false,
    extendedWeather: false
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    let datos = ''

    if (cityValue && countryValue) {
      this.setState({
        loanding: true,
        error: false,
        extendedWeather: false
      });
      try {
        const APIkey = "337cb8efcec75a9a3df2a42bb251f8a9";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${APIkey}`;
        const kelvin = 273.15;
        const response = await fetch(URL);
        datos = await response.json();
        this.setState({
          city: cityValue,
          countryCode: datos.sys.country,
          temperature: (datos.main.temp - kelvin).toFixed(1),
          description: datos.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`,
          error: "",
          loanding: false,
          extendedWeather: true
        });
      } catch (e) {
        this.setState({
          error: datos.cod + ' ' + datos.message, 
          loanding: false,
          extendedWeather: false
        });
      }
    } else {
      this.setState({
        error: "Plese enter a city and a country",
        loanding: false,
        extendedWeather: false
      });
    }
  }; 
   
  handleExtend =()=>{
    const {city, countryCode} = this.state
    localStorage.setItem('city', city)
    localStorage.setItem('country', countryCode)  
  }
  
  render() { 
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col md-6">
              <Form getData={this.getWeather} />
              {this.state.error && (
                <div className="userMessage alert alert-danger">
                  {this.state.error}
                </div>
              )}
              {this.state.loanding && (
                <h1 className="alert alert-info userMessage">LOANDING...</h1>
              )}
            </div>
            <div className="col md-6">
              <WeatherCard {...this.state} />
              {
                this.state.extendedWeather? (
                  <Link to='/ExtendedWeather'
                   className="extend"
                   onClick ={this.handleExtend}
                   >extended weather</Link>
                ):
                (
                  <div></div>
                )
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
} 

export default Principal 