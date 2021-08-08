export async function fetchWeather(city = "Munich,de") {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_WEATHER_API_SECRET}&units=metric`
    );
    return await res.json();
  } catch (e) {
    console.error(e.message);
  }
}
