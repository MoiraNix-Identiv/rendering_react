import './App.css';
import React, {useState} from 'react';
import Home from "./routes/Home";
import Employees from "./routes/Employees/Employees";
import PACS from "./routes/PACS/PACS";
import Testing from "./routes/Testing/Testing";
import About from './routes/About';
import Header from './components/MUI/Header';
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./components/MUI/Theme";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


//className = "bkImage" style = {{backgroundImage: `url(${background})` }}
export default function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const[darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((current) => !current);
  }

  return (
      <ThemeProvider theme={darkmode ? lightTheme: darkTheme}>
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
      </ThemeProvider>
  );
}
