import React from "react";
import { WeatherApp } from "./features/weather";
import "./App.css";

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <WeatherApp />
      </ErrorBoundary>
    </div>
  );
}

export default App;
