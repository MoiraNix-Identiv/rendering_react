import './App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Home from "./routes/Home";
import Employees from "./routes/Employees/Employees";
import PACS from "./routes/PACS/PACS";
import Testing from "./routes/Testing/Testing";
import ErrorPage from './routes/error-page';
import About from './routes/About';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


//className = "bkImage" style = {{backgroundImage: `url(${background})` }}
export default function App() {
  return (

      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/PACS" element={<PACS />} />
            <Route path="/Testing" element={<Testing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
  );
}
