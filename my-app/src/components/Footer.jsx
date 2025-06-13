import './Footer.css'

function Footer(){
    return (
        <>
            <footer>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card bg-dark" id='footerCard'>
                            <p><i class="bi bi-geo-alt-fill"></i></p>
                            <p>
                                Ikorodu <br /> Lagos, Nigeria
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card bg-dark" id='footerCard'>
                            <p><i class="bi bi-envelope-at-fill"></i></p>
                            <p style={{textDecoration:'underline'}}>
                                <a href="mailto:orjir207@gmail.com">Email Us</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="card bg-dark" id='footerCard'>
                            <p><i class="bi bi-telephone-fill"></i></p>
                            <p>
                                +2348020770820
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-12">
                        <div className="d-flex" style={{justifyContent:'center'}} id='socialGroup'>
                            <div id='social'><a href="#"><i style={{color:'purple'}} class="bi bi-instagram"></i></a></div>
                            <div id='social'><a href="#"><i style={{color:'lightblue'}} class="bi bi-twitter"></i></a></div>
                            <div id='social'><a href="#"><i style={{color:'blue'}} class="bi bi-facebook"></i></a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;