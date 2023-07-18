import './App.css';
import React, {useState} from 'react';
import Home from "./routes/Home";
import Employees from "./routes/Employees/Employees";
import PACS from "./routes/PACS/PACS";
import Testing from "./routes/Testing/Testing";
import About from './routes/About';
import Header from './components/MUI/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({toggleColorMode: () => {}});

const getDesignTokens = (mode) =>({
palette:{
    mode,
    ...(mode === 'light'
    ? {

            primary: '#045c85',
            divider: '#033A54',
            text: {
                primary: '#000000',
                secondary: '#68BDF7',
            },
            background: {
                default: '#ffcc00',
                paper: '#ffcc00',
              },

        } 
    :{
        primary: '#444444',
        divider: '#381C36',
        text: {
            primary: '#ffcc00',
            secondary: '#68BDF7',
        },
        background: {
            default: '#000000',
            paper: '#000000',
          },
    }),

},
});



//className = "bkImage" style = {{backgroundImage: `url(${background})` }}
function App() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [darkMode, setDarkMode] = useState('light');

 /* const colorMode = React.useMemo (
    ()=> ({
        toggleColorMode: () => {
          setDarkMode((prevMode) =>
            prevMode === 'light' ? 'dark' : 'light',
          );
        },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(darkMode)), [darkMode]); */
//              <Header dm={darkMode}/>
  return (
            <div>
            <Router>
              <Header/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Employees" element={<Employees />} />
                <Route path="/PACS" element={<PACS />} />
                <Route path="/Testing" element={<Testing />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </Router>
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
