import './Service.css'
import serviceImage from './image/serviceTampleteImage.png'

function Service(){
    return(
        <>
            <div className="container" id='service'>
                <h1 className='text-start' id='serviceHead' style={{fontFamily:"'Audiowide', cursive", marginTop:'100px'}}>Services</h1>
                <p className='lead' id='serivceHeadTxt'>
                    In today's digital world, efficient and innovative software solutions are essential for success. As a software engineer, I specialize in creating robust, scalable, and user-friendly applications. Whether you're looking for web development, system architecture, or cloud solutions, I have the expertise to bring your vision to life. Here are the key services I provide
                </p>

                <div className="row" id='serviceContent'>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>Software Development</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Writing, testing, and maintaining code for applications.</li>
                                    <li>Building web, mobile, and desktop applications.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>System Design & Architecture</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Creating software system architecture.</li>
                                    <li>Building web, mobile, and desktop applications.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>Software Testing & Debugging</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Identifying and fixing bugs.</li>
                                    <li>Implementing automated testing frameworks.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>Frontend & Backend Development</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Developing user-friendly interfaces (Frontend).</li>
                                    <li>Managing server-side logic and databases (Backend).</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>API Development & Integration</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Creating and managing RESTful or GraphQL APIs.</li>
                                    <li>Connecting applications with third-party services.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>Cybersecurity & Data Protection</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Implementing security measures.</li>
                                    <li>Protecting software from vulnerabilities and cyberattacks.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>Cloud Computing & Deployment</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Deploying applications on cloud platforms (AWS, Azure, Google Cloud).</li>
                                    <li>Managing server infrastructure.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>DevOps & Continuous Integration</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Automating software development and deployment processes.</li>
                                    <li>Monitoring application performance.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    
                </div>

                <div className="row" id='serviceContent'>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>DevOps & Continuous Integration</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Automating software development and deployment processes.</li>
                                    <li>Monitoring application performance.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>AI & Machine Learning Integration</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Developing intelligent systems.</li>
                                    <li>Implementing ML models to enhance software functionality.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-start" id='serviceCard'>
                            <p style={{fontWeight:'bold'}}>Consulting & Technical Support</p>
                            <p id='serviceCardText'>
                                <ul>
                                    <li>Advising clients on best practices.</li>
                                    <li>Providing long-term software maintenance and updates.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <img src={serviceImage} alt="" id='serviceImg' style={{width:'300px', height:'300px'}} />
                    </div>
                </div>
           </div>
        </>
    )
}
export default Service;