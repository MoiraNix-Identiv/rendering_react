import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Employees from "./routes/Employees/Employees";
import Home from "./routes/Home";
import PACS from "./routes/PACS/PACS";
import Testing from "./routes/Testing/Testing";
import ErrorPage from './routes/error-page';
import './index.css';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
      <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
