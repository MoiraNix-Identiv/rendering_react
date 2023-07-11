import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import StyledButton from './StyledButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <StyledButton className = "ModelButton" text = {"Generate Model"}>Web</StyledButton>
      <StyledButton className = "AlarmsButton" text = {"Trigger Alarms"}>Trigger Alarms</StyledButton>
      <StyledButton className = "ResetButton" text = {"Reset Scenario"}>Reset Alarms</StyledButton>
    </ToggleButtonGroup>
  );
}