import React from 'react' ;  

const ExtendedWeatherCard = (props) => {
  const { temp, date, hum, description, icon } = props.data;
  return (
    <div>
      <div className="containerWE">
        <div className="cardWE">
          <br/>
          <h2 className="date">{date}</h2>
          <hr />
          <h1 className="tempW"> 
          {temp}
            <sup id="celsius">Cº</sup>
          </h1>
          <h2 className="humidity"> Hum: {hum} % </h2>
          <img className="img" src={icon} alt="" />
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}; 

export default ExtendedWeatherCard