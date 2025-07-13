import React from "react";
import WeatherBox from "./WeatherBox";

const WeatherCard = ({data}) => {


  
const temperature =data.main.temp;

  const Sunrise = 1750980249;
const Sunset = 1751028884;

const SunriseTime = new Date(Sunrise*1000).toLocaleTimeString([],{
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
const SunsetTime = new Date(Sunset*1000).toLocaleTimeString([],{
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});


let tempcolor= "text-green-800";

if(temperature>=38){
  tempcolor = "text-red-500";
} else if(temperature>28) {

  tempcolor = "text-yellow-500";

  




  
}

  if (!data || !data.main || !data.weather) return null;

  


  return (
   <div className="bg-gray-50 w-full max-w-md mx-auto mt-6 rounded-xl text-gray-800 p-6 shadow-sm border border-gray-200">
  <h2 className="font-semibold text-blue-600 text-xl border-b pb-2 mb-4">Weather Details</h2>
  
  <div className="space-y-3">
    <div className="flex justify-between">
      <span className="text-gray-600">City:</span>
      <span className="font-medium">{data.name}</span>
    </div>
    
       <div className="flex justify-center">
      <span className="text-gray-600 text-[18px]">{data.weather[0].main}</span> 
      
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600">Temperature:</span>
      <span className={`font-medium text ${tempcolor}` }>{temperature}°C</span>
    </div>
    
    <div className="flex justify-between">
      <span className="text-gray-600">Feels Like:</span>
      <span className="font-medium">{data.main.feels_like}°C</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600"> Humidity</span>
      <span className="font-medium">{data.main.humidity}%</span>
    </div>
    
    <div className="flex justify-between">
      <span className="text-gray-600">High:</span>
      <span className="font-medium text-red-500">{data.main.temp_max}°C</span>
    </div>
    
    <div className="flex justify-between">
      <span className="text-gray-600">Low:</span>
      <span className="font-medium text-green-800">{data.main.temp_min}°C</span>
    </div>



    <div className="flex justify-between">
      <span className="text-gray-600"> Sunrise:</span>
      <span className="font-medium">{SunriseTime}</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600"> Sunset:</span>
      <span className="font-medium">{SunsetTime}</span>
    </div>
    
  </div>
</div>
  );
};

export default WeatherCard;
