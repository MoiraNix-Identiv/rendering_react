import * as React from 'react';
import ToggleButton from '@mui/material/Button';
import myTheme from '../MUI/Theme';
import { ThemeProvider } from '@mui/material';

export default function StyledButton(props){
  return (
    <ThemeProvider theme={myTheme}>
      <ToggleButton color ="secondary" variant="contained">{props.text}</ToggleButton>
    </ThemeProvider>
  );
}

