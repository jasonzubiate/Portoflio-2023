// import { fetchLocalWeather } from "@/utils";
'use client'

import "@/styles/PageHeader.css";
import { useEffect } from "react";

function PageHeader() {
  const date = new Date();
  const time = date.getHours() + ":" + date.getMinutes();
  // const weather = await fetchLocalWeather();
  // const { cloudCover, rainIntensity, temperature } =
  //   weather.timelines.minutely[0]?.values;

  // let weatherIcon = "";
  // if (temperature > 70) {
  //   weatherIcon = "☀️"; // Sunny
  // } else if (cloudCover > 3) {
  //   weatherIcon = "☁️"; // Cloudy
  // } else if (rainIntensity > 0) {
  //   weatherIcon = "🌧️"; // Rainy
  // }

  // {Math.round(temperature)}ºF {weatherIcon}

  return (
    <div className="page-header">
      <div className="header-item">
        <p className="text-m w-[200px]">Recent UCI Graduate</p>
      </div>
      <div className="header-item">
        <p className="text-m w-[200px]">Los Angeles {time} PM</p>
      </div>
    </div>
  );
}

export default PageHeader;
