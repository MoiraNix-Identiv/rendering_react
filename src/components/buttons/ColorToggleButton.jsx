import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import StyledButton from './StyledButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "../../components/MUI/Theme";
export default function ColorToggleButton() {
  /*const [data , setData] = React.useState('');

  const handleChange= () => {
    setData(newAlignment);
  };*/

  
  const [alignment , setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  

  return (
    <ThemeProvider theme = {myTheme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton color="primary" className = "ModelButton" text = {"Generate Model"}>Web</ToggleButton>
        <ToggleButton className = "AlarmsButton" text = {"Trigger Alarms"}>Trigger Alarms</ToggleButton>
        <ToggleButton className = "ResetButton" text = {"Reset Scenario"}>Reset Alarms</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
}