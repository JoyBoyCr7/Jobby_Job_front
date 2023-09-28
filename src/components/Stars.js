import {FaStar} from 'react-icons/fa'
import { useState } from 'react';

const StarRating = (props) => {
    const [hover, setHover] = useState(null)
    return ( 
    <div style={{textAlign : "left"}}>
        {[...Array(5)].map((item, ind, offHover) => {
            const ratingValue = ind + 1
        return (
            // it got tuff here but growth happened
        <label key={ind}>
            <input style={{display:'none'}} type='radio' value={ratingValue}  onClick={() => props.changeRating(ratingValue)}/>
            <FaStar className='star' color={ratingValue <= ( hover || props.rating) ? "#FFD700": "#6B6B6B"} size={20} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
        </label> 
        );
         })}
    </div>
    );
};

export default StarRating