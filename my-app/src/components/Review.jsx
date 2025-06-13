import './Review.css'
import { useState } from 'react'

function Review(){

    const [reviewLikes, setLike] = useState(9000);
    const [reviewDislikes, setDislike] = useState(0);
    const countLikes = () => setLike (reviewLikes + 1);
    const countDislikes = () => setDislike (reviewDislikes + 1);

    return(
        <>
            <div id="reviewHead">
                <h3 className='text-start ms-5' id='reviewTxt' style={{fontFamily:"'Audiowide', cursive", marginTop:'50px'}}>Reviews</h3>
            </div>
            <div className='d-flex ms-5' id='reviewCount'>
                <div className='d-flex'>
                    <div id='count'><p>{reviewLikes}K</p></div>
                    <div><button className='btn btn-secondary' onClick={countLikes} style={{color:'white'}}><i class="bi bi-hand-thumbs-up-fill"></i></button></div>
                </div>
                <div className='d-flex ms-5'>
                    <div id='count'><p>{reviewDislikes}</p></div>
                    <div><button className='btn btn-secondary' onClick={countDislikes} style={{color:'white'}}><i class="bi bi-hand-thumbs-down-fill"></i></button></div>
                </div>
            </div>
        </>
    )
}
export default Review;