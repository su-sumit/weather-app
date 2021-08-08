import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../api/weather-api";
import { normalizeData } from "../../utils/data-normalizer";

const initialState = {
  weatherData: [],
  status: "idle",
};

export const fetchWeatherAsync = createAsyncThunk(
  "weather/fetchWeather",
  async (amount) => {
    try {
      const response = await fetchWeather();
      return normalizeData(response.list);
    } catch (e) {
      throw e.message;
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherAsync.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.status = "idle";
      })
      .addCase(fetchWeatherAsync.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const selectWeatherData = (state) => {
  return state.weather.weatherData;
};

// export const getSelectedWeatherSlots = ({
//   weather: { weatherData, slideIndex },
// }) => {
//   return weatherData[slideIndex].weatherSlots;
// };

export const selectAppState = (state) => state.weather.status;

export default weatherSlice.reducer;
