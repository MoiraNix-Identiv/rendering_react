import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//state here maybe?  Not sure.  Calls render if changed.
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#000000', height: '30vh', maxWidth: '50%' }} />
      </Container>
    </React.Fragment>
  );
}