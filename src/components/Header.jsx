import React from 'react';
import images from '../images/bg02.svg'
import Service from './Services';

const Header = (()=>{
    return(
        <>
        <div className="main">
            <img className="bgimg" src={images} alt="Oxpan Images"></img>
            <div className="frontdiv">
                <h1>OXPAN SOFTWARE</h1>
                <p>We are here for you business...</p>
            </div>
        </div>
        <Service />
        </>
    )
})

export default Header;