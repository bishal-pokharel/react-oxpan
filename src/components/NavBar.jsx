import React from 'react';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/logo.png';
import {Link} from 'react-router-dom';
import OxpanServiceData from '../components/OxpanService/OxpanServiceData.json'
function NavBar(){

    // const getIdFromOxpanService =(a)=>{
    //     OxpanService.map((data)=>{
    //         return(
    //             <>
    //             {a= data.id}
    //             {console.log(a)}
    //             </>
    //         )
            
    //     })
    // }
    // console.log(getIdFromOxpanService);
    return(
    <nav className="navbar">
        <a href="#" className="logo"><img  src={image} /></a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
        </label>

        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Product</a></li>
            <li className="o-service"><Link to="#">Service
                <ul className="sub-service">
                    {OxpanServiceData.map((data, i)=>{
                        return(
                            <li key={i}><Link to={`/service/${data.id}`}>{data.Heading}</Link></li>
                        )
                    })}
                    
                </ul>
            </Link></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Contact US</a></li>
        </ul>
    </nav>
       
    )

}

export default NavBar;