import './Price.css'

function Price(props){
    return(
        <>
            <div className="card mt-4" id='priceCard'>
                <div className='row' id='priceData'>
                    <div className='col-sm-12 col-md-6 col-lg-2' id='region'><p>{props.priceRegion}</p></div>
                    <div className='col-sm-12 col-md-6 col-lg-2' id="hour"><p>Hourly Rate: {props.priceHour}</p></div>
                    <div className='col-sm-12 col-md-6 col-lg-2' id="project"><p>Project-Based Pricing: {props.priceProject}</p></div>
                    <div className='col-sm-12 col-md-6 col-lg-2' id="consult"><p>Consultation Fees: {props.priceConsult}</p></div>
                    <div className='col-sm-12 col-md-12 col-lg-2 ms-auto me-3'>{props.flag}</div>
                </div>
            </div>
        </>
    )
}
export default Price;