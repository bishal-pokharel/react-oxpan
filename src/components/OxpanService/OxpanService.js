import React, { useEffect, useState } from 'react';
import './OxpanService.css';
import OxpanServiceData from './OxpanServiceData.json'
import HeaderTwo from '../../components/HeaderTwo';
import WebsiteDetails from './WebsiteDetails';

const OxpanService = ({match})=>{

    const serviceplus = match.params.id;

    const [data , setData] = useState([]);

    useEffect(()=>{
        const servicedata = OxpanServiceData.filter((data)=> data.id.includes(serviceplus)).map((showdata)=>{
            return(
                setData(showdata)
            )
        })
        
        return servicedata;
    }, [serviceplus]);
    console.log(data);
    
        return(
            <>
            <HeaderTwo topic={data.Heading} quote={data.quote}/>
            <div className="serviceoxpan">
                 <div key={data.id} className="imgdiv-service">
                 <img src={`../images/${data.imageURL}`} />
                 {/* {data.imageURL} */}
                 </div>
                 <h1>{data.Heading}</h1> 
                 <p>{data.para}</p>
                 {data.id === 'web-service' ? <WebsiteDetails /> : 
                 <div className="service-feature">
                    <ul>
                        {OxpanServiceData.filter((data)=> data.id.includes(serviceplus)).map((showdata)=>{
                            return(
                                <>
                                {showdata.features.map((list)=>{
                                    return(
                                        <li>&ndash; {list}</li>
                                    )
                                })} 
                                </>
                            )   
                        })}
                    </ul>
                 </div>
                }
            </div>
            </>
        )
}


export default OxpanService;