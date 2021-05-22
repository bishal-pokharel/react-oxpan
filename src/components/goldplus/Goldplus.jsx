import React, { useState } from 'react';
import styles from './Goldplus.css';
import HeaderTwo from '../HeaderTwo';
import goldplusImg from '../../images/GoldPlus2.png';
import datagoldplus from './GoldplusData.json';

const Goldplus = ({match})=>{

    const [qoute, setquote] = useState("SOFTWARE FOR SAVING AND CREDIT COOPERATIVES");
    const [topic, settopic] = useState("OXPAN Cooperative Gold Plus");

    const goldid= match.params.topic;

    const listData = datagoldplus.filter((filterid)=> filterid.id.includes(goldid)).map((data)=>{
            return(
        <>
           <p>{data.description}</p>
        </>
    )
    })

// const listData= datagoldplus.map((data, index) => {
//     return(
//         <>
//             {console.log(index)}
//            <p>{data.description}</p>
//         </>
//     )
// })
// console.log(listData.filterid);

    return(
        <>
        <HeaderTwo quote={qoute} topic={topic}/>
        <div className="content">
            <div className="des-content">
            <img src={goldplusImg} alt="cooperative" />
            <p>{listData}</p>
            </div>
        </div>
        <div className="features">
            <div className="list-head">
                <h2>{datagoldplus.filter((filterid)=> filterid.id.includes(goldid)).map((data)=>{
            return(
            <h1>{data.title}</h1>
            )
         })}</h2>
            </div>
            <div className="features">
                <ol>
                    {/* <li><b>Follows National and International Rules</b></li> */}
                    {datagoldplus.filter((filterid)=> filterid.id.includes(goldid)).map((data)=>{
                        return(
                            <>
                            {data.list.map((list)=>{
                                return(
                                    <li><b>{list}</b></li>
                                )
                            })}
                            </>
                        )
                    })}
                </ol>
            </div>
        </div>
        </>
    )
};

export default Goldplus;