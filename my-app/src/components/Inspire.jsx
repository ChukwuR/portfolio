import './Inspire.css'
import problemSolve from './image/problemSolve.jpg'
import cleanCode from './image/cleanEditor.png'
import exploreProject from './image/exploreProject.webp'
import brain from  './image/creativity.jpg'

function Inspire(){
    return(

        <>
            <div className="row" style={{marginTop:'100px'}}>
                <div className="col-sm-12 col-md-6 col-lg-3" id='engageCard'>
                    <div className="card" id='engage'>
                        <p>
                            From problem-solving to innovation, I turn complex ideas into seamless digital realities
                            <div>
                                <img src={problemSolve} alt="" id='engageImage' style={{width:'200px', height:'190px', borderRadius:'50px', marginTop:'5px'}} />
                            </div> <br />
                            <i className="bi bi-gear-wide-connected" id='icon' style={{color:'white', fontSize:'x-large'}}></i>
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" id='engageCard'>
                    <div className="card" id='engage'>
                        <p>
                            Passionate about clean, efficient code and user-friendly experiences. Let's build something amazing together!
                            <div><img src={cleanCode} alt="" id='engageImage' style={{width:'200px', height:'178px'}} /></div> <br />
                            <i className="bi bi-file-code-fill" id='icon' style={{color:'white', fontSize:'x-large'}}></i>
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" id='engageCard'>
                    <div className="card" id='engage'>
                        <p>
                            Explore my work, dive into my projects, and see how I craft solutions that make a difference in the tech world
                            <div><img src={exploreProject} alt="" id='engageImage' style={{width:'200px', height:'178px', borderRadius:'50px', marginTop:'10px'}} /></div> <br />
                            <i className="bi bi-card-checklist" id='icon' style={{color:'white', fontSize:'x-large'}}></i>
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" id='engageCard'>
                    <div className="card" id='engage'>
                        <p>
                            Building solutions that bridge creativity and functionality—because great software isn’t just about code, it’s about experience
                            <div><img src={brain} alt="" id='engageImage' style={{width:'200px', height:'175px', borderRadius:'50px', marginTop:'5px'}} /></div> <br />
                            <i className="bi bi-lightbulb-fill" id='icon' style={{color:'white', fontSize:'larger'}}></i>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inspire;