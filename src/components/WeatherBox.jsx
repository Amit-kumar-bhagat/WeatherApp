import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherIcon from "../assets/weather-icon.svg";

const WeatherBox = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const fetchWeatherAndAQI = async () => {
    if (city.trim() === "") {
      alert("Please Enter City name");
      return;
    }

    setLoading(true);

    const apiKeyOFWeather = import.meta.env.VITE_WEATHER_API_KEY;
    const urlOfWeather = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKeyOFWeather}&units=metric`;

    const apiKeyOfAQI = import.meta.env.VITE_AQI_API_KEY;
    const urlOfAqi = `https://api.waqi.info/feed/${city}/?token=${apiKeyOfAQI}`;

    try {
      const [responseOfWeather, responseOfAQI] = await Promise.all([
        fetch(urlOfWeather),
        fetch(urlOfAqi),
      ]);

      const dataOfWeather = await responseOfWeather.json();
      const dataOfAQI = await responseOfAQI.json();

      console.log(dataOfWeather);
      console.log(dataOfAQI);

      if (responseOfWeather.ok) {
        setWeather(dataOfWeather);
        setAqi(dataOfAQI);
        setError("");
      } else {
        setWeather(null);
        setAqi(null);
        setError("City not found");
      }
    } catch (err) {
      setWeather(null);
      setAqi(null);
      setError("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 w-auto rounded-2xl mx-auto pl-4 pr-4 pb-8 pt-8 flex flex-col items-center shadow-md border border-gray-100">
      <div className="flex gap-2 ">
        <img src={WeatherIcon} alt="Weather-icon" className="" />
        <h1 className="text-gray-800 text-3xl font-semibold mt-0">
          Live Weather
        </h1>
      </div>

      <div className="px-8 w-full mt-8">
        <p className="text-gray-600 text-md mb-2">Search for a city</p>

        <input
          type="text"
          placeholder="E.g. Delhi"
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchWeatherAndAQI();
            }
          }}
          className="p-3 rounded-lg w-full bg-gray-50 text-gray-800 placeholder-gray-400 outline-none border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 transition-all"
        />

        <button
          onClick={fetchWeatherAndAQI}
          disabled={Loading}
          className={`mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg w-full shadow-sm hover:shadow-md transition ${
            Loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {Loading ? "Fetching..." : "Get Forecast"}
        </button>
      </div>

      {error && <p className="text-red-400 mt-4">{error}</p>}
      {weather && aqi && <WeatherCard data={weather} dataAqi={aqi} />}
    </div>
  );
};

export default WeatherBox;
