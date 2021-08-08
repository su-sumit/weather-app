import weatherReducer, { fetchWeatherAsync } from "../weather-slice";

describe("weather reducer", () => {
  const initialState = {
    weatherData: [],
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(weatherReducer(undefined, { type: "unknown" })).toEqual({
      ...initialState,
    });
  });

  it("should set loading true while action is pending", () => {
    const action = { type: fetchWeatherAsync.pending };
    const state = weatherReducer({ ...initialState }, action);
    expect(state).toEqual({ weatherData: [], status: "loading" });
  });

  it("should set user when action is fulfilled", () => {
    const action = {
      type: fetchWeatherAsync.fulfilled,
      payload: [{ temp: 31 }],
    };
    const state = weatherReducer({ ...initialState }, action);
    expect(state).toEqual({
      weatherData: [{ temp: 31 }],
      status: "idle",
    });
  });

  it("should set error true when action is rejected", () => {
    const action = {
      type: fetchWeatherAsync.rejected,
    };
    const state = weatherReducer({ ...initialState }, action);
    expect(state).toEqual({
      weatherData: [],
      status: "error",
    });
  });
});
