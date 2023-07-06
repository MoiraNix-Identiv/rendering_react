import * as React from 'react';
import BWButton from './BWButton';

export default function ButtonGroup(){
    return (
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <BWButton text = "button1">Test 1</BWButton>
            <BWButton text = "button2">Test 2</BWButton>
            <BWButton text = "button2">Test 3</BWButton>
    </ButtonGroup>

    );
  }