import React from 'react';
import { Link } from 'react-router-dom';

const sliderItem = props => {
    
    return (
        <Link to={props.link}>
            <div>
                <img src={props.img} alt="carousel" />
                <p className="legend">{props.children}</p>
            </div>
        </Link>
    );
}

export default sliderItem;