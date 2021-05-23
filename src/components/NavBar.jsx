import React from 'react';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/logo.png';
import {Link} from 'react-router-dom';
import OxpanServiceData from '../components/OxpanService/OxpanServiceData.json';
import {Servicedata} from '../data/ServiseData'
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
        <Link to="/" className="logo"><img  src={image} /></Link>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
        </label>

        <ul className="menu">
            <li><Link to="/">Home</Link></li>

            <li className="o-product"><Link to="#">Product
            <ul className="sub-product">
                    {Servicedata.map((data, i)=>{
                        return(
                            <li key={i}><Link to={`/product/${data.topic}`}>{data.heading}</Link></li>
                        )
                    })}
                </ul>
            </Link></li>

            <li className="o-service"><Link to="#">Service
                <ul className="sub-service">
                    {OxpanServiceData.map((data, i)=>{
                        return(
                            <li key={i}><Link to={`/service/${data.id}`}>{data.Heading}</Link></li>
                        )
                    })}
                    
                </ul>
            </Link></li>

            <li><Link to="#">Download</Link></li>

            <li><Link to="#" className="o-company">Company
            <ul className="sub-company">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/Career">Career</Link></li>
                <li><Link to="/feedback">FeedBack</Link></li>
                <li><Link to="/FAQs">FAQs</Link></li>
            </ul>
            </Link>
            </li>

            <li><Link to="/contact">Contact US</Link></li>
        </ul>
    </nav>
       
    )

}

export default NavBar;