import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-pink-300 to-blue-300 h-screen p-6 ">
      <App />
    </div>
  </React.StrictMode>
);
