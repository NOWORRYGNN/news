import React from 'react';
import { Stack } from 'react-bootstrap';

const content = ({tittle, text2}) => {
  return (
    <Stack direction='vertical' gap={2}>
        <div style={{color: 'white'}}><h3>{tittle}</h3></div>
        <div style={{color: 'white'}}>{text2}</div>
    </Stack>
  )
}

export default content