import React from 'react';

const WebsiteDetails = ()=>{
    return(
        <>
        <div className="website-details">
            <div className="webservice s-basic">
            <h3 class="card-title text-center">Static-basic</h3>
                <p class="text-center">Logo And Poster Design</p>
                <p class="text-center">Upto 5 page</p>
            </div>
            <div className="webservice s-standard">
            <h3 class="card-title text-center">Static-standard</h3>
                <p class="text-center">Logo And Poster Design</p>
                <p class="text-center">Upto 10 page</p>
                <p class="text-center">Responsive User Interface</p>
            </div>
            <div class="webservice s-premium">
                <h3 class="card-title text-center">Static-Premium</h3>
                <p class="text-center">Logo And Poster Design</p>
                <p class="text-center">Upto 15 page</p>
                <p class="text-center">Responsive User Interface</p>
                <p class="text-center">Search Engine Optimization</p>
            </div>

            <div className="webservice d-basic">
            <h3 class="card-title text-center">Dynamic-basic</h3>
                <p class="text-center">Responsive User Interface</p>
                <p class="text-center">Search Engine Optimization</p>
                <p class="text-center">Database Access</p>
            </div>
            <div className="webservice d-standard">
            <h3 class="card-title text-center">Dynamic-Standard</h3>
                <p class="text-center">Responsive User Interface</p>
                <p class="text-center">Search Engine Optimization</p>
                <p class="text-center">Database Access</p>
                <p class="text-center">Registration and Login</p>
            </div>
            <div class="webservice d-premium">
                <h3 class="card-title text-center">Dynamic-Premium</h3>
                <p class="text-center">Responsive User Interface</p>
                <p class="text-center">Search Engine Optimization</p>
                <p class="text-center">Database Access</p>
                <p class="text-center">Registration and Login</p>
                <p class="text-center">Logo And Poster Design</p>
                <p class="text-center">E-commerce</p>
            </div>
        </div>
        </>
    )
}

export default WebsiteDetails;
