import React from 'react';
import { Stack } from 'react-bootstrap';

const content = ({key1, key2, key3, tittle1, text1, tittle2, text2, tittle3, text3}) => {
  if (key1 == 1) {
    return (
      <Stack direction='vertical' gap={2}>
          <div key={key1} style={{color: 'white'}}><h4>{tittle1}</h4></div>
          <div style={{color: 'white'}}>{text1}</div>
      </Stack>
    )  
  }
  else if (key2 == 2) {
    return (
      <Stack direction='vertical' gap={2}>
          <div key={key2} style={{color: 'white'}}><h4>{tittle2}</h4></div>
          <div style={{color: 'white'}}>{text2}</div>
      </Stack>
    )  
  }
  else if (key3 == 3) {
    return (
      <Stack direction='vertical' gap={2}>
          <div key={key3} style={{color: 'white'}}><h4>{tittle3}</h4></div>
          <div style={{color: 'white'}}>{text3}</div>
      </Stack>
    )  
  }
}

export default content