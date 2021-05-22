import React from 'react';
import {Link} from 'react-router-dom'


function Cards(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.image} />
            </div>
            <div className="card-body">
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
            </div>
            <Link className={props.topic} id="moreinfo" to={`product/${props.topic}`}>more info</Link>
        </div>
    )
}
export default Cards;