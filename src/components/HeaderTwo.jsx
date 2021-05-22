import React from 'react';
import image1 from '../images/slide03.jpg'

const HeaderTwo = ((props)=>{
    return(
        <section>
            <div className="sec_header">
                <img src={image1} className="bgimg_secHeader" alt="Oxpan Image"/>
                <div className="quote">
                <p><i><b>{props.quote}</b></i></p><hr></hr>
                 <h3>{props.topic}</h3>
                </div>
            </div>
        </section>
    )

});

export default HeaderTwo;