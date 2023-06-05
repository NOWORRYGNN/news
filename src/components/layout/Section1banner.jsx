import React from 'react'
import Section2sidecontent from './Section2sidecontent'

const Section1banner = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>Banner</div>
        <div className='col'>
          <Section2sidecontent />
        </div>
      </div>
    </div>
  )
}

export default Section1banner