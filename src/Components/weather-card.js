import React from 'react'
import './weather-card.css'

class WeatherCard extends React.Component {
  render() { 

    return (
      <div>
        {(!this.props.error)&& this.props.temperature ? (
          <div className="containerW">
            <div className="cardW">
              <h2 className="ciudad">
                {" "}
                {this.props.city}{" "}
                <sup className="country"> {this.props.countryCode} </sup>
              </h2>
              <h1 className="temp">
                {this.props.temperature}
                <sup className="celsius"> Cº</sup>
              </h1>
              <img className="img" src={this.props.icon} alt="" />
              <p className="description">{this.props.description}</p>
            </div>
          </div>
        ) : (
          <div className="containerW">
            <div className="cardW">
              <img
                className="imgDefault animate__animated animate__tada"
                src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-cloudy-512.png"
                alt=""
              />
              <p className="description"></p>
            </div>
          </div>
        )}
      </div>
    );
  }
} 

export default WeatherCard;