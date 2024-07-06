import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import "./assets/css/style.css";
import 'react-phone-input-2/lib/style.css';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
