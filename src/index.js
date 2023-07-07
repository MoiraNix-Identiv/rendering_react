import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Employees from "./pages/Employees/Employees";
import Home from "./pages/Home";
import PACS from "./pages/PACS/PACS";
import Testing from "./pages/Testing/Testing";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import './index.css';
import App from './App';
//import { CssBaseline } from '@mui/material';
//import { ThemeProvider } from '@mui/material/styles';
//import theme from './components/MUI/Theme'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "Employees",
          element: <Employees />,
        },
      ],
    },
    
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
