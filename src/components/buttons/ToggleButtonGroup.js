import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import StyledButton from './StyledButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

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
      <StyledButton value="web">Web</StyledButton>
      <StyledButton value="android">Android</StyledButton>
      <StyledButton value="ios">iOS</StyledButton>
    </ToggleButtonGroup>
  );
}