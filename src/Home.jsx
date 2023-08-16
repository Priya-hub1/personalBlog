import React from "react";
import img4 from '../src/assets/irises.jpg';
import img from '../src/assets/img.jfif';
import img1 from '../src/assets/download.jfif';
import img2 from '../src/assets/images.jfif';
import {Link} from 'react-router-dom';

 const Home = () => {

    return(
      <>
       <div className="hero">
        <img src={img4} className="background" alt="background"/>
        <h1 className="title"> Welcome to my blogs </h1>
      </div>
      <div className="sections">
      <div className="About-me"> 
          <h2 className='heading'>About me </h2>
          <p> 
            I'm Priyatharshini.I love technology , In this blog you can watch the latest news in tech , new products review and how to make career based on the trending skills 
            And also I'm thrilled to share my views on gardening ,farming and fashion so let's stay tuned 
            <div className=""></div>
          </p>
      </div>

    <div  className='section'>
        <h2 className='heading'>Blogs</h2>
        <div className="flexbox">

          <div className="flexitem">
            <img src={img2} className="imageResize" alt=""/>
            <p className='passion'> Technology </p>
            <div className='detail'>
              <p>Learn more about our story and how we started an online store that made over 100K in profit in our first year of business</p>
              <Link to='/technology' className='link'>  Check out!  </Link>
            </div>
          </div>

          <div className="flexitem">
            <img src={img} className="imageResize" alt="" />
            <p className='passion'> Gardening</p>
            <div className='detail'>
              <p>Learn more about our story and how we started an online store that made over 100K in profit in our first year of business</p>
              <Link to='/technology' className='link'>  Check out!  </Link>
            </div>
          </div>

          <div className="flexitem">
            <img src={img1} className="imageResize" alt=""/>
            <p className='passion'> Sports </p>
            <div className='detail'>
              <p>Learn more about our story and how we started an online store that made over 100K in profit in our first year of business</p>
              <Link to='/technology' className='link'>  Check out!  </Link>
            </div>
          </div>

        </div>
    </div>
    </div>
      </>
       
    )
   
}

export default Home;