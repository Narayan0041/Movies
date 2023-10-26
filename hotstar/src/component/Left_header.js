import React from 'react'
import "../index.css"
export default function Left_header() {
  return (
    <>
    <div className='LeftHeader'>
<div className='LogoSection'>
   <img src='https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg' width={50} alt='logo'/>
   <div className='subscribe'>
  <span>Subscribe <i className="fa-solid fa-arrow-right"></i></span>
   </div>
</div>
<div className='LinkSection'>
<a href='/' alt=""><img src='https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png' width={25} alt='MySpace'></img></a>
<a href='/'alt=""><i className="fa-solid fa-magnifying-glass"></i></a>
<a href='/' alt="" ><i className="fa-solid fa-house active"></i></a>
<a href='/' alt=""><i className="fa-solid fa-tv"></i></a>
<a href='/' alt=""><i className="fa-solid fa-play"></i></a>
<a href='/' alt=""><i className="fa-regular fa-clock"></i></a>
</div>
    </div>
    </>
  )
}
