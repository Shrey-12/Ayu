import React from 'react'
import './intro.css'
import homeImg from '../../assets/images/homeImg.jpg'
import natlogo from '../../assets/images/natlogo.png'
import article from '../../assets/images/article.png'
// import leafl from '../../assets/images/leafl.png'
// import leafr from '../../assets/images/leafr.png'
import AyuLogo from '../../assets/images/AyuLogo.png'
import medimg from '../../assets/images/medimg.png'
import plantimg from '../../assets/images/plantimg.png'
import skincareimg from '../../assets/images/skincareimg.png'
import welcome from '../../assets/images/welcome.jpg'
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex-grow items-start justify-center">
                    <div className="ayu-logo-parent ">
                      <img src={homeImg} className="ayu-logo"
                          style={{ width: '100%', height: '100%' }}/>
                    </div>
        </div>
      </div>
      <div className='home-rec-box'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className="flex-grow items-centre bg-customGreen py-4">
        <div className="nat-logo-parent" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={natlogo} className="nat-logo"
                          style={{ width: '50px', height: '40px' }}/>
        </div>
        <h2 className='home-rec-text'
        style={{ fontSize: '0.7rem', textAlign:'center', fontWeight:'bold' }}>
        100% Natural
       
        </h2>
        <h1 className='home-rec-text'
        style={{ fontSize: '0.7rem', textAlign:'center' }}>
        Experience the purity of nature with our products, <br/>
        meticulously formulated with 100% natural extracts.
       
        </h1>
        </div>
        <div className="flex-grow items-centre  bg-customGreen py-4">
        <div className="nat-logo-parent" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={natlogo} className="ayu-logo"
                          style={{ width: '50px', height: '40px' }}/>
        </div>
        <h3 className='home-rec-text'
        style={{ fontSize: '0.7rem', textAlign:'center', fontWeight:'bold' }}>
        100% Vegan
       
        </h3>
        <h4 className='home-rec-text'
        style={{ fontSize: '0.7rem', textAlign:'center' }}>
        Experience the purity of nature with our products, <br/>
        meticulously formulated with 100% natural extracts.
       
        </h4>
        </div>
        <div className="flex-grow items-centre bg-customGreen py-4">
        <div className="nat-logo-parent" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={natlogo} className="ayu-logo"
                          style={{ width: '50px', height: '40px' }}/>
        </div>
        <h5 className='home-rec-text'
        style={{ fontSize: '0.7rem', textAlign:'center', fontWeight:'bold' }}>
        Ecofriendly
       
        </h5>
        <h6 className='home-rec-text'
        style={{ fontSize: '0.7rem', textAlign:'center' }}>
        Experience the purity of nature with our products, <br/>
        meticulously formulated with 100% natural extracts.
       
        </h6>
        </div>
        </div>
      </div>
      <div className='home-article-container'>
        <div className="flex items-center justify-center py-20 px-10 bg-customWhite" >
            <div className="article-img py-4 ">
                <img src={article} className="articles"
                     style={{ width: '700px', height: '100%' }}/>
            </div>
       </div>
      </div>
      <div className='home-products bg-customWhite' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <h1 className='home-producthead-text ' style={{ fontSize: '2.3rem'}}>
          OUR PRODUCTS
        </h1>
        <div className='flex justify-center'>
          <div className='skincare ml-10 mr-10' style={{textAlign: 'center'}}>
          
            <img src={skincareimg} className="skincare-img" style={{ width: '150px', height: '100%' }} alt="Skincare"/>
           <div className='home-rounded-box mt-5'>
            <h1> SKINCARE</h1>
          </div>
          </div>
          <div className='health ml-10 mr-10' style={{ textAlign: 'center'}}>
            <img src={medimg} className="healthcare-img" style={{ width: '150px', height: '100%' }} alt="Health"/>
            <div className='home-rounded-box mt-5'>
            <h1> HEALTH</h1>
            </div>
          </div>
          <div className='plants ml-10 mr-10' style={{textAlign: 'center' }}>
            <img src={plantimg} className="plants-img" style={{ width: '150px', height: '100%' }} alt="Plants"/>
            <div className='home-rounded-box mt-5'>
            <h1> PLANTS</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='welcome-article px-14 py-14 bg-customTan'>
  <div className="flex items-start justify-start">
    <div className="welcome-img ml-14">
      <img src={welcome} className="welcomeimg" style={{ width: '400px', height: '100%' }}/>
    </div>
    <div className="home-box bg-customSage ml-[-50px] mt-12 z-10 relative">
      <div className='flex flex-col justify-start px-4 py-2'>
        <h1 className='welcome-head text-customTan' style={{ fontSize: '2.7rem', textAlign: 'start'}}>
          Welcome!
        </h1>
        <h2 className='home-rec-text px-2 py-1'>
        Embark on a journey through our Ayurveda website, where ancient wisdom merges seamlessly with modern wellness practices.
         Explore a comprehensive array of holistic remedies, expert guidance, and resources tailored to nurture your well-being and restore balance to mind, body, and spirit.
        </h2>
          <Link to="/shop">
            <div className="home-btn btn-one mb-5 ml-1.5 mt-2">
              <span>EXPLORE</span>
            </div>
          </Link>
      </div>
    </div>
  </div>
  {/* Other content of the welcome-article */}
</div>
<div className='home-footer bg-customGreen' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <div className="Ayurveda-logo mb-3">
    <img src={AyuLogo} className="Ayulogoimg" style={{ width: '150px', height: '100%' }} />
  </div>
  <div className="flex mb-5">
    <div  className='ml-14'>
    <h1 className='home-footer-head mr-24' style={{ fontSize: '0.7rem' }}> CONTACT US </h1>
      <p className='home-footer-text mt-2' style={{ fontSize: '0.6rem' }}>
        +91 9752356347 <br/>
        +91 7238743826
      </p>
    </div>
    <div className='ml-14'>
    <h2 className='home-footer-head mr-24' style={{ fontSize: '0.7rem' }}> ADDRESS </h2>
    <p className='home-footer-text mt-2' style={{ fontSize: '0.6rem' }}>
        Girls' Hostel, IIIT <br/>
        Bongora, Guwahati, <br/>
        781015
      </p>
    </div>
     <div className='ml-14'>
     <h3 className='home-footer-head mr-24 ' style={{ fontSize: '0.7rem' }}> EMAIL </h3>
     <p className='home-footer-text mt-2 ' style={{ fontSize: '0.6rem' }}>
        navya.dhawde21b@iiitg.ac.in 
      </p>
     </div>
      {/* <h4 className='home-footer-head mr-24 ml-14' style={{ fontSize: '0.7rem' }}> CONNECT WITH US </h4> */}
      
    </div>
  </div>
</div>

  )
}

export default Intro