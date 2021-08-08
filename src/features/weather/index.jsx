import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Typography, Container, Box, Grid } from "@material-ui/core";

import {
  fetchWeatherAsync,
  selectWeatherData,
  selectAppState,
} from "./weather-slice";
import Loader from "../../components/loader/loader";
import TemperatureUnitRadioGroup from "../../components/radio/radio";
import Carousel from "../../components/carousel/carousel";
import BarChart from "../../components/bar-chart/bar-chart";
import { useStyles, useCarouselItemStyles } from "./styles";

const CarouselSlideItem = ({ data, metric, onClickHandler, isActive }) => {
  const classes = useCarouselItemStyles();
  return (
    <Grid
      item
      className={classes.carouselItem}
      role="button"
      onClick={onClickHandler}
    >
      <div className={`carousel-slide-item__body${isActive ? " active" : ""}`}>
        <Typography
          className={classes.date}
          variant="subtitle2"
          component="p"
          color="inherit"
        >
          {`Date: ${data.date}`}
        </Typography>
        <Typography className={classes.temp} variant="h6" color="inherit">
          {`${data.avgTemp[metric]}° ${metric.toUpperCase()}`}
        </Typography>
      </div>
    </Grid>
  );
};

export function WeatherApp() {
  // UI states
  const [metric, setMetric] = useState("c");
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const classes = useStyles();
  const weatherData = useSelector(selectWeatherData);
  const appState = useSelector(selectAppState);
  const dispatch = useDispatch();
  const isLoading = appState === "loading";

  useEffect(() => {
    dispatch(fetchWeatherAsync());
  }, [dispatch]);

  if (isLoading && !weatherData.length > 0) {
    return <Loader />;
  }

  return (
    <Container className={classes.root} maxWidth="lg">
      <AppBar className="appBar" position="static">
        <Typography variant="h6" color="inherit">
          Weather App
        </Typography>
      </AppBar>
      <Box className={classes.paddedContainer}>
        <TemperatureUnitRadioGroup
          value={metric}
          onTempUnitChange={setMetric}
        />
        <Carousel
          data={weatherData}
          metric={metric}
          onClickHandler={setActiveDayIndex}
        >
          {weatherData.map((dataDay, i) => (
            <CarouselSlideItem
              key={dataDay.date}
              data={dataDay}
              metric={metric}
              onClickHandler={() => setActiveDayIndex(i)}
              isActive={activeDayIndex === i}
            />
          ))}
        </Carousel>
        <BarChart
          data={weatherData[activeDayIndex]?.weatherSlots}
          metric={metric}
        />
      </Box>
    </Container>
  );
}
