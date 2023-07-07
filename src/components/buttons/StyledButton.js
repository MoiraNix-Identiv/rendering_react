import * as React from 'react';
import ToggleButton from '@mui/material/Button';
import idTheme from '../MUI/IDTheme';
import { ThemeProvider } from '@mui/material';

export default function StyledButton(){
  return (
    <ThemeProvider theme={idTheme}>
      <ToggleButton color ="primary" variant="contained"></ToggleButton>
    </ThemeProvider>
  );
}

