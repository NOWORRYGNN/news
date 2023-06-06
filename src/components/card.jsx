import React from 'react';
import { Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


export default function card({imageUrl, Number, Tittle, Content}){
  return (
      <Stack direction='horizontal' gap={3} className='p-1'>
        <div>
          <Image src={imageUrl} alt='miniContentImg' width={100} fluid />
        </div>
        <div>
          <h2>{Number}</h2>
          <h3>{Tittle}</h3>
          <p>{Content}</p>
        </div>
      </Stack>

  )
}