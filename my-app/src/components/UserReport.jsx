import './UserReport.css'
import userFeedback from './image/aboutImages/userFriendly.jpg'
import CircularProgressBar from './CircularProgressBar';
import Review from './Review';

function UserReport(){
    return(
        <>
            <div id="userHead">
                <h1 style={{fontFamily:"'Audiowide', cursive", marginTop:'100px'}}>What Clients Say About My Work</h1>
            </div>
            <div className="row" id='userDetailFeedback'>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card" id='userId'>
                        <p className='lead'>
                            "Richard is one of the most talented engineers I've worked with. His attention to detail and problem-solving skills helped streamline our entire system. Highly recommend!" — Jane Doe, CTO at Tech Solutions
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card lead" id='userId'>
                        <p className="lead">
                            "He transformed our outdated app into a sleek, user-friendly platform. The increase in user engagement has been phenomenal. Thanks, Richard!" — John Smith, CEO at InnovateX
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8">
                    <div className="card lead" id='userId'>
                        <p className="lead">
                            "Clear communication, fast delivery, and excellent coding practices—Richard exceeded our expectations at every step." — Emily Johnson, Product Manager at StartUp Labs
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card lead" id='userId'>
                        <button className='btn btn-secondary' style={{cursor:'not-allowed'}}><a href="#" aria-disabled="true" style={{textDecoration:'none', color:'white', fontWeight:'bold', cursor:'not-allowed'}}>See more</a></button>
                    </div>
                </div>
            </div>
            <div className='row mt-5' id='workExp'>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card" id='userId'>
                        <p className="lead">
                            I worked with XYZ Corp to optimize their cloud infrastructure, reducing costs by 35% while improving system efficiency. The project involved refactoring legacy code, implementing automated deployments, and enhancing security protocols. The result? Faster performance, lower maintenance expenses, and improved scalability.
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <img src={userFeedback} alt="image" id='userFeedbackImg' style={{borderRadius:'25px'}} />
                </div>
            </div>

            {/* user results */}
            <div className="row mt-5" id='resultWrap'>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" id='result'>
                        Projects Completed: <br />
                        25+ 👨‍💻<br />
                        <p className='lead' id='para' style={{color:'white'}}>successful software solutions delivered</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" id='result'>
                        Total Clients: <br />
                        15+ 📈<br />
                        <p className='lead' id='para' style={{color:'white'}}>happy customers across industries</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" id='result'>
                        Years of Experience: <br />
                        7+ 🔍<br />
                        <p className='lead' id='para' style={{color:'white'}}>years in software engineering</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" id='result'>
                        Technologies Used: ⭐<br />
                        <p className='lead' id='para' style={{color:'white'}}>Python, JavaScript, React, AWS, and more</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" id='result'>
                        Client Satisfaction: 98%<br />
                        <br />
                        <p className='lead' id='para' style={{color:'white'}}>positive feedback</p>
                        <CircularProgressBar percentage={98}/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Review/>
                </div>
            </div>
        </>
    )
}
export default UserReport;