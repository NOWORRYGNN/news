import React from 'react';
import { Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


export default function card({imageUrl, Number, Tittle, Content}){
  return (
      <Stack direction='horizontal' className='gap-3 p-lg-5 p-sm-0'>
        <div>
          <Image src={imageUrl} alt='miniContentImg' width={120} />
        </div>
        <div className='mt-3'>
          <p className='text-secondary fw-bold fs-4'>{Number}</p>
          <p className='font-weight-bold fs-5'>{Tittle}</p>
          <p className='text-secondary fs-6 text-justify'>{Content}</p>
        </div>
      </Stack>

  )
}