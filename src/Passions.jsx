import React from 'react';
import img from '../src/assets/img.jfif';
import img1 from '../src/assets/download.jfif';
import img2 from '../src/assets/images.jfif';
 

const Passions = () => {

  return(

    <>
    <h3 className='heading'>Passions</h3>
    <div className="flexbox">

    <div className="flexitem">
      <img src={img2} className="imageResize" alt=""/>
      <p className='passion'> Technology </p>
      </div>

    <div className="flexitem">
    <img src={img} className="imageResize" alt="" />
    <p className='passion'> Gardening</p>
    </div>

    <div className="flexitem">
    <img src={img1} className="imageResize" alt=""/>
    <p className='passion'> VolleyBall </p>
    </div>
    
    </div>
    </>
  )
}

export default Passions;