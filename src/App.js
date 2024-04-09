import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Willow Grove",
    temperature: 46,
    time: "Saturday 2:30pm",
    description: "Moderate Rain",
    humidity: 92,
    wind: 17.27,
    icon: "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
  };

  return (
    <div className="Weather">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <span className="time">{weatherData.time}</span>,{" "}
              <span className="description">{weatherData.description}</span>
              <br />
              Humidity:{" "}
              <strong className="humidity">{weatherData.humidity}%</strong>,
              Wind:
              <strong className="wind-speed">{weatherData.wind}m/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div className="icon">
              <img src={weatherData.icon} alt="weather icon" />
            </div>
            <div className="weather-app-temperature">
              {weatherData.temperature}
            </div>
            <div className="weather-app-unit">°F</div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
      <footer>
        This project was coded by
        <a
          href="https://github.com/domoniquecodes"
          target="_blank"
          rel="noreferrer"
        >
          Domonique Wilson
        </a>
        . It is open-sourced on
        <a
          href="https://github.com/domoniquecodes/clima-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        and hosted by
        <a
          href="https://clima-by-domonique.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
