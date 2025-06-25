import React from "react";
import { useState } from "react";

const WeatherCard = ({data}) => {


  


  const temperature =data.main.temp;


let tempcolor= "text-green-800";

if(temperature>=28){
  tempcolor = "text-red-500";
} else if(temperature>18) {

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
    
    <div className="flex justify-between">
      <span className="text-gray-600">Temperature:</span>
      <span className={`font-medium text ${tempcolor}` }>{temperature}°C</span>
    </div>
    
    <div className="flex justify-between">
      <span className="text-gray-600">Feels Like:</span>
      <span className="font-medium">{data.main.feels_like}°C</span>
    </div>
    
    <div className="flex justify-between">
      <span className="text-gray-600">High:</span>
      <span className="font-medium text-red-500">{data.main.temp_max}°C</span>
    </div>
    
    <div className="flex justify-between">
      <span className="text-gray-600">Low:</span>
      <span className="font-medium text-green-800">{data.main.temp_min}°C</span>
    </div>

    
  </div>
</div>
  );
};

export default WeatherCard;
