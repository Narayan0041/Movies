import React ,{useState,useEffect} from 'react'

export default function Ad_section(props) {
 const[imageSrc ,setImageSrc] =useState("https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/CW_LTF_Mashup_PostL_V4_deskXBB-3ffecfee-8e3d-4874-bd2c-58afe427dc4b.jpg")

 useEffect(() => {
    var imageSources = ['https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-20/CWLTFMashupPostLV5_deskXBB-1ed28f74-ad26-4c01-a8b8-f87efd7a1caa.jpg', 'https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-03/CW_LTF_Mashup_PostL_V4_deskXBB-3ffecfee-8e3d-4874-bd2c-58afe427dc4b.jpg', 'https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-25/yamaha_desktop-50fde3df-e17e-47b4-bbb1-29057130ecc3.jpg','https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-10-20/CWLTFHungama2PreL_deskXBB-cc508c30-1dcd-4f22-ae0a-66d00c0f9796.jpg']; // An array of image sources to cycle through
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageSources.length;
      setImageSrc(imageSources[currentIndex]);
    }, 5000);
    

    return () => {
        clearInterval(interval);
      };
    }, []);

    useEffect(() => {
        window.onload = () => {
          // Start the image rotation when the window is loaded
          // You can perform additional actions here if needed
        };
      }, []);
    

   
        // window.onload = () => {
            
        //     let finalImage =Math.floor(Math.random()*imageSources.length-1);
        //   setImageSrc(finalImage)
        //   // Start the image rotation when the window is loaded
        //   // You can perform additional actions here if needed
        // };
     


  
   return (
    <>
    <div className='AdSection'>
        <div className='Img'>
        <img src={imageSrc} width={600} alt='AdHeader'></img>
        </div>
        <div className='TextSection'>
            <div className='AdSection-UpperSection'>
                <img src={"https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"} width={50} alt='logo'/>
                <div className='AdSection-UpperSection-text'>
                    <h4>Exciting Line-Up</h4>
                    <p>Streaming Now, for Free!</p>
                </div>
            </div>
            <div className='AdSectionBtnSection'>
                <button className='AdSectionBtn'>Explore</button>
            </div>
        </div>
    </div>
    </>
  )
}
