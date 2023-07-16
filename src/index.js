import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetFiveDayWeather from "./components/GetFiveDayWeather/GetFiveDayWeather";
import GetWeather from "./components/GetWeather/GetWeather";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/today",
    element: (
      <div>
        <GetWeather />
      </div>
    ),
  },
  {
    path: "/fiveDay",
    element: (
      <div>
        <GetFiveDayWeather />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
