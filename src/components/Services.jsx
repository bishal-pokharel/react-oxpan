import React from 'react';
import {Servicedata} from '../data/ServiseData';
import Cards from '../components/Cards';
import image1 from '../images/shop.jpg';
import bgimg from '../images/bg1.svg';

function Service(props){

    return(
        <div className="service">
            <h1>OXPAN Software for your Business</h1>
            <img className="body-bg" src={bgimg} alt="background" />
        <div className="service-container">
        {Servicedata.map((data)=>{
            return(
                <Cards key={data.topic} image={image1} heading={data.heading} description={data.description} topic={data.topic} />
            )
        })}
            {/* <Cards image={image1} heading={ServiseData[0].heading} description={ServiseData[0].description} topic={ServiseData[0].topic}/>
            <Cards image={image1} heading={ServiseData[1].heading} description={ServiseData[1].description} topic={ServiseData[1].topic} />
            <Cards image={image1} heading={ServiseData[2].heading} description={ServiseData[2].description} topic={ServiseData[2].topic} />
            <Cards image={image1} heading={ServiseData[3].heading} description={ServiseData[3].description} topic={ServiseData[3].topic} />
            <Cards image={image1} heading={ServiseData[4].heading} description={ServiseData[4].description} topic={ServiseData[4].topic} /> 
            <Cards image={image1} heading={ServiseData[5].heading} description={ServiseData[5].description} topic={ServiseData[5].topic} />
            <Cards image={image1} heading={ServiseData[6].heading} description={ServiseData[6].description} topic={ServiseData[6].topic} /> */}
        </div>
        </div>
    )
}
export default Service;