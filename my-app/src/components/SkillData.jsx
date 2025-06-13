import './SkillData.css'
import CircularProgressBar from './CircularProgressBar';

function SkillData(){
    return(
        <>
            <div className="container" id='skill'>
                <div id="skillHeadContent">
                    <h1 className='text-start' id='title' style={{fontFamily:"'Audiowide', cursive", marginTop:'100px'}}>View Our Skills</h1>
                    <p className='lead' id='skillTxt'>
                        Success in software engineering requires a strong foundation of technical expertise and problem-solving abilities. I have honed a diverse skill set that enables me to develop efficient, scalable, and user-friendly solutions. Below are the key skills that define my work
                    </p>
                </div>
                <div className="row">
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card' id='skillCard'>
                            <div className='d-flex' id='skillCardTxt' style={{justifyContent:'space-between'}}>
                                <div className='text-start'>
                                    <p className="title">Programming Languages:</p>
                                </div>
                                <div className="percentageRating">
                                    86%
                                </div>
                            </div>
                            <div>
                                <CircularProgressBar percentage={86}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card' id='skillCard'>
                            <div className='d-flex' id='skillCardTxt' style={{justifyContent:'space-between'}}>
                                <div className='text-start'>
                                    <p className="title">Data Structures and Algorithms:</p>
                                </div>
                                <div className="percentageRating">
                                    95%
                                </div>
                            </div>
                            <div>
                                <CircularProgressBar percentage={95}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card' id='skillCard'>
                            <div className='d-flex' id='skillCardTxt' style={{justifyContent:'space-between'}}>
                                <div className='text-start'>
                                    <p className="title">Software Design & Architecture:</p>
                                </div>
                                <div className="percentageRating">
                                    89.5%
                                </div>
                            </div>
                            <div>
                                <CircularProgressBar percentage={89.5}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card' id='skillCard'>
                            <div className='d-flex' id='skillCardTxt' style={{justifyContent:'space-between'}}>
                                <div className='text-start'>
                                    <p className="title">Testing and Debugging:</p>
                                </div>
                                <div className="percentageRating">
                                    97.8%
                                </div>
                            </div>
                            <div>
                                <CircularProgressBar percentage={97.8}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card' id='skillCard'>
                            <div className='d-flex'id='skillCardTxt' style={{justifyContent:'space-between'}}>
                                <div className='text-start'>
                                    <p className="title">Communication and Collaboration:</p>
                                </div>
                                <div className="percentageRating">
                                    98%
                                </div>
                            </div>
                            <div>
                                <CircularProgressBar percentage={98}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className='card' id='skillCard'>
                            <div className='d-flex' id='skillCardTxt' style={{justifyContent:'space-between'}}>
                                <div className='text-start'>
                                    <p className="title">Continuous Learning:</p>
                                </div>
                                <div className="percentageRating">
                                    99.8%
                                </div>
                            </div>
                            <div>
                                <CircularProgressBar percentage={99.8}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkillData;