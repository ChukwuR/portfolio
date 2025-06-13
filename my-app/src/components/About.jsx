import aboutImage from './image/aboutImages/aboutTamplete.png'
import './About.css'
import UserReport from './UserReport';
import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import '../index.css';

function About(){

    return(
        <>
            <div>
                {/* <img src={aboutImage} alt="" style={{width:'700px', height:'500px'}} /> */}
                <div className="container card" id='aboutStartTamplete'>
                    <div style={{justifySelf:'center'}}>
                        <p className='text-start' id='heading' style={{fontFamily:"'Audiowide', cursive"}}>
                            Innovate <br /> Code <br /> Collaborate <br /> Create
                        </p> <br />
                        <br />
                        <p className='lead text-start' style={{fontFamily:"'Audiowide', cursive"}}>
                            <h2 style={{color:'white'}}>
                                Building with passion, solving with purpose, <br /> and shaping the future through technology
                            </h2>
                        </p>
                    </div>
                </div>
                <div id='content'>
                    <h1 className='text-start' style={{fontFamily:"'Audiowide', cursive", marginTop:'100px'}}>About Us</h1>
                    <p className="container lead text-start">
                        Hello! I'm Orji Richard, a dedicated software engineer passionate about building efficient, scalable, and user-friendly applications. With expertise in both frontend and backend development, I transform complex problems into intuitive solutions. <br />
                        <br />
                        I specialize in:
                        <ul>
                            <li className='lead'>Full-stack development (React, Node.js, Python)</li>
                            <li className='lead'>API design & cloud integrations (AWS, Firebase)</li>
                            <li className='lead'>UI/UX optimization for better user experiences</li>
                            <li className='lead'>Performance scaling & security best practices</li>
                        </ul>
                        <br />
                        Technology is constantly evolving, and I strive to stay ahead by learning, adapting, and implementing modern software solutions. Every project is an opportunity to innovate and create meaningful digital experiences.
                        <br />
                        If you're looking for a developer who is detail-oriented, creative, and committed to delivering high-quality solutions, let's connect! <br />
                        <br />

                        <UserReport/>

                        <br />
                        <button className='btn btn-secondary'><a href="http://localhost:5173/Form" style={{textDecoration:'none', fontWeight:'bold'}}>Hire-Us</a></button>
                    </p>
                </div>
            </div>
        </>
    )
}
export default About