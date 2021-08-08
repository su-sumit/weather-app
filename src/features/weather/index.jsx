import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Typography, Container, Box, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
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
        <div className={classes.date}>{data.date}</div>
        <div className={classes.temp}>
          {`${data.avgTemp[metric]}° ${metric.toUpperCase()}`}
        </div>
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
  const isError = appState === "error";

  useEffect(() => {
    dispatch(fetchWeatherAsync());
  }, [dispatch]);

  if (isLoading && !weatherData.length > 0) {
    return <Loader />;
  }

  return (
    <Container className={classes.root} maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography variant="h5" component="h5">
          Weather App
        </Typography>
      </AppBar>
      <Box className={classes.paddedContainer}>
        {isError && <Alert severity="error">This is an error message!</Alert>}
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
          dateSelected={weatherData[activeDayIndex]?.date}
        />
      </Box>
    </Container>
  );
}
