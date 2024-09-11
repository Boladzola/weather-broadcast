import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Form from "../Form";
import styles from "./index.module.scss";

const API_KEY = "ee35ce9f7bcf9a9253a406afc7309aa2";

const WeatherInfo = () => {
  const [currentData, setCurrentData] = useState(null);

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      try {
        const api_url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
        setCurrentData(data);
        console.log(data);
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      console.log("Enter the city");
    }
  };

  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Form weatherMethod={gettingWeather} className={styles.form} />
          {currentData && (
            <Box className={styles.weatherData}>
              <Box className={styles.box}>
                <Typography variant="h4">
                  Weather for {currentData.name}
                </Typography>
              </Box>
              {/* <Box className={styles.box}></Box> */}
              <Box className={styles.box}>
                <Typography>Temperature: {currentData.main.temp}°C</Typography>
              </Box>
              <Box className={styles.box}>
                <Typography>{currentData.weather[0].main}</Typography>{" "}
                <img
                  src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </Box>
              <Box className={styles.box}>
                <Typography>Wind: {currentData.wind.speed} m/s</Typography>
              </Box>
              <Box className={styles.box}>
                <Typography>
                  Pressure: {currentData.main.pressure} mm
                </Typography>
              </Box>
              <Box className={styles.box}>
                <Typography>Humidity: {currentData.main.humidity} %</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default WeatherInfo;
