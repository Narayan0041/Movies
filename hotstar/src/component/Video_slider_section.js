import React from 'react'
import "../App.css"
export default function Video_slider_section(props) {
  return (
    <>
    <div className='VideoSlider'>
        <div className='header'>
    <h3>{props.heading}</h3>
</div>
<div className='VideoSection'>
<img src={props.image} width={150} alt='PicImage' />
</div>
    </div>
    </>
  )
}
