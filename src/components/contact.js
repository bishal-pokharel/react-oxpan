import React from 'react';
import HeaderTwo from './HeaderTwo';
import { Link } from 'react-router-dom';

const Contact = ()=>{
    return(
        <>
        <HeaderTwo quote={"FEEL FREE TO CONTACT WITH US..."} topic={"CONTACT US"}/>
        <div className="contact-us">
        <h2 className="contact-head">OXPAN MICROSYS PVT. LTD.</h2>
            <address>Prayag Marga-31, Minbhawan , Kathmandu , Nepal</address>
            <address>phone N0 : +977 1 5905286, +977 9801906572</address>
            <address>Email : info@oxpanmicrosys.com</address>
            <address className="ml-5">oxpanmicrosys@gmail.com</address>
            <address>Follow Us:</address>
            <div className="contact-icon-div" id="footer-icon">
                <Link to="https://www.facebook.com/OXPAN-Microsys-324828834603484/" className="text-secondary" target="_blank"><i className="fa fa-facebook fa-lg"></i></Link>
                <Link to="https://www.linkedin.com/in/oxpan-microsys-3879741b6/" className="text-secondary" target="_blank"><i className="fa fa-linkedin fa-lg"></i></Link>
                <Link to="#"><i className="fa fa-twitter fa-lg"></i></Link>
                <Link to="https://mail.google.com/" className="text-secondary" target="_blank"><i className="fa fa-envelope fa-lg"></i></Link>
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9537556197465!2d85.3392746154152!3d27.687824132955686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1993cf7cffab%3A0x15b787518a48a0d!2sOXPAN%20Microsys!5e0!3m2!1sne!2snp!4v1600346190180!5m2!1sne!2snp" width="100%" height="350vh" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
        </>
        
    )
}

export default Contact;