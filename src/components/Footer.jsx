import React from "react";
import { Servicedata } from "../data/ServiseData";
import { Link } from "react-router-dom";
import datagoldplus from '../components/goldplus/GoldplusData.json';

const Footer = ({ match }) => {

    // const goldid= match.params.topic;

  return (
    <footer>
      <div className="footerdiv">
        <div className="footer-card">
          <h3>Address</h3>
          <div className="ooter-link">
            <h5>Oxpan Microsys Pvt. Ltd.</h5>
            <address>
              <strong>Main Office</strong>
            </address>
            <address>Prayag Marga-31, Minbhawan, Kathmandu</address>
            <cite>Phone No: 015905286, 9851135840</cite>
          </div>
        </div>
        <div className="footer-card">
          <h3>Branch Office</h3>
          <div className="footer-link">
            <cite>Surendra Yadav: 9852682940</cite>
            <address>Jhapa Branch</address>
            <br></br>

            <cite>Milan Dahal: 9852682940</cite>
            <address>Ithari Branch</address>
            <br></br>

            <cite>Santosh Kafle: 9858024509</cite>
            <address>Nepalgunj Branch</address>
          </div>
        </div>
        <div className="footer-card">
          <h3>Useful Links</h3>
          <div className="footer-link">
            {datagoldplus.map((data , i) => {
              return (
                  <Link key={i} to={`/product/${data.id}`}>
                    {data.id}
                  </Link>
                  
              );
            })}
          </div>
        </div>
        <div className="footer-card">
          <h3>Follow Us:</h3>
          <div className="footer-icon">
            <Link
              to="https://www.facebook.com/OXPAN-Microsys-324828834603484/"
              target="_blank"
            >
              <i className="fa fa-facebook fa-lg"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/oxpan-microsys-3879741b6/"
              target="_blank"
            >
              <i className="fa fa-linkedin fa-lg"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter fa-lg"></i>
            </Link>
            <Link to="https://mail.google.com/" target="_blank">
              <i className="fa fa-envelope fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h3>&copy; OXPAN Microsys, 2018. All rights reserved.</h3>
      </div>
    </footer>
  );
};
export default Footer;
