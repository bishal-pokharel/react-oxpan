import React, { useEffect, useState } from "react";
// import  {ListGroup, ListGroupItem } from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderTwo from "../HeaderTwo";
import $ from 'jquery';

const Career = () => {

    const [showResult, setShowResult] = useState(false);

    const toggle = ()=>{
        setShowResult(!showResult);
    }

  return (
    <>
      <HeaderTwo
        topic={"YOUR CARRER"}
        quote={"MAKE YOUR CAREER SUCCESS WITH US..."}
      />

      <div className="career-div">
        <div className="job-des" onClick={toggle}>
          <h2>JOB DESCRIPTION</h2>
          
        </div>
        <div className="carrer" >
        {showResult ? <ul className="list-group ml-3">
            <li className="list-group-item">Installing Operating System</li>
            <li className="list-group-item">Manage Local Area Network</li>
            <li className="list-group-item">
              Operate Smart devices like, Tablets, POS Machines and Printers and
              Xerox machines, projectors
            </li>
            <li className="list-group-item">
              Install and manage MS SQL Server 2000 and newer versions of MS SQL
              Server
            </li>
            <li className="list-group-item">
              Prepare hand-outs, booklets, presentations and manuals and other
              training materials
            </li>
            <li className="list-group-item">
              Collect client requirements and complaints
            </li>
          </ul> : null}
          
        </div>

        <div className="job-des" onClick={toggle}>
          <h2>QUALIFICATION</h2>
        </div>
        <div className="carrer">
            {showResult ? <ul className="list-group ml-3">
            <li className="list-group-item">
              Bacholer Dregree in relevent field OR
            </li>
            <li className="list-group-item">Trainning from any institute.</li>
          </ul> : null}
          
        </div>

        <div className="job-des" onClick={toggle}>
          <h2>EXPERIENCE</h2>
        </div>
        <div className="carrer">
            {showResult ? <ul className="list-group ml-3">
            <li className="list-group-item">
              +6 months experience in technical support
            </li>
            <li className="list-group-item">Database knowledge should be known</li>
            <li className="list-group-item">
              Experience in HTML , CSS and JavaScript
            </li>
          </ul> : null}
          
        </div>

        <div className="job-des" onClick={toggle}>
          <h2>OTHER SPECIFICATION</h2>
        </div>
        <div className="carrer">
            {showResult ? 
            <ul className="list-group ml-3">
            <li className="list-group-item">
              Sound communication and interpersonal skill
            </li>
            <li className="list-group-item">
              Basic concept of web and desktop designing and programming
            </li>
            <li className="list-group-item">
              Sound Knowledge of Banking and Cooperative Transactions and Accounting.
            </li>
            <li className="list-group-item">
              Sound knowledge of operating system and application software
              Installation and trouble shooting.
            </li>
            <li className="list-group-item">
              Should have two wheeler valid licence.
            </li>
          </ul> : null
            }
          
        </div>

        <div className="job-des" onClick={toggle}>
          <h2>HOW TO APPLY</h2>
        </div>
        <div className="carrer">
            {showResult ? <ul className="list-group ml-3">
                <li className="list-group-item">Send your CV at oxpanmicrosys@gmail.com</li>
                <li className="list-group-item">Send Cover letter with expected Salary in same mail id.</li>
          </ul> : null
            }
          
        </div>

      </div>
    </>
  );
};
export default Career;
