import {FaStar} from 'react-icons/fa'
import { useState } from 'react';

const Starfrozen = (props) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return ( 
    <div>
        {[...Array(5)].map((item, ind) => {
            const ratingValue = ind + 1
        return (
            // it got tuff here but growth happened
        <label key={ind}>
            <input style={{display:'none'}} type='radio' value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaStar className='star' color={ratingValue <= ( props.rating ) ? "#FFD700": "#6B6B6B"} size={20} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
        </label> 
        );
         })}
    </div>
    );
};

export default Starfrozen