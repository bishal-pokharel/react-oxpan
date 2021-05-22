import React from 'react';
import images from '../images/fst1.jpg'
import Service from './Services';

const Header = (()=>{
    return(
        <>
        <div className="main">
            <img className="bgimg" src={images} alt="Oxpan Images"></img>
            <div className="frontdiv">
            </div>
        </div>
        <Service />
        </>
    )
})

export default Header;