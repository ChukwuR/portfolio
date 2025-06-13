import './Home.css'
import React, {useContext, useState, useEffect} from 'react';
import profileImg from './image/profTamplete2.png'
import SkillData from './SkillData.jsx'
import Footer from './Footer.jsx'
import Service from './Service.jsx'
import Review from './Review.jsx'
import Inspire from './Inspire.jsx'
import PriceData from './PriceData.jsx'
import { ThemeContext } from './ThemeContext.jsx';
import '../index.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function HomePage(){

    return(
        <div>
            <div>
                <div className="container">
                    <div className="row"  id='welcomeContent'>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p id='welcome' style={{fontFamily:"'Audiowide', cursive"}}>
                                Hey! I'm Orji Richard, <br /> A Software Engineer <br /> Based in Nigeria <br />
                                <br />
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-lg-6 mt-2'>
                                        <button className='btn btn-secondary'><a href="mailto:orjir207@gmail.com" style={{color:'white', textDecoration:'none', fontWeight:'normal', fontSize:'larger'}}>Email Us</a></button>
                                    </div>
                                    <div className='col-sm-6 col-md-6 col-lg-6 mt-2'>
                                        <button className='btn btn-secondary'><a href="http://localhost:5173/Form" style={{color:'white', textDecoration:'none', fontWeight:'normal', fontSize:'larger'}}>Hire Me</a></button>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={profileImg} alt="" id='profImage' style={{width:'400px', height:'400px', justifySelf:'center'}} />
                        </div>
                    </div>
                </div>

                <Inspire/>

                <SkillData/>

                <Service/>

                <PriceData/>

                <Review/>

                <Footer/>
        
            </div>

            {/* welcome content with the image */}
            
        </div>
    )
}
export default HomePage;