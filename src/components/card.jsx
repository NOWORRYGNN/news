import React from 'react';
import { Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


export default function card({imageUrl, Number, Tittle, Content}){
  return (
      <Stack direction='horizontal' gap={3}>
        <div>
          <Image src={imageUrl} alt='miniContentImg' fluid />
        </div>
        <div>
          <p><h2>{Number}</h2></p>
          <p><h3>{Tittle}</h3></p>
          <p>{Content}</p>
        </div>
      </Stack>

  )
}