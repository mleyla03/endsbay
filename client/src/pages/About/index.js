
import * as React from 'react';

import { Card } from 'antd';
import { useState,useEffect } from 'react';

import Style from "./index.module.css"
import { getAllEnds } from '../../api/requests';
const About = () => {
    const [ robot,setRobot]=useState([])
    useEffect(()=>{
        getAllEnds().then((res)=>{
            setRobot(res)
        })
    },[])
  
  return (
    <>
    
    
    <div className={Style.abouts}>
       <h1>We care about what we offer</h1>
       <p className={Style.onep}>Who are in extremely love with eco friendly system.</p>
    </div>
  
    <div className={Style.ends} style={{display:"flex",justifyContent:"space-around",alignItems:"center",float:"60px",FlexWrap:"wrap"}}>
        {robot && robot.map((rob)=>{
          return <>
          <Card className={Style.cards}
    style={{
      width: 300,
      height:350,
      marginTop:120,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}
  >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={rob.imageURL} alt=''/>
    </div>
    <h3 style={{textAlign:"center", marginTop:"30px"}}>{rob.names}</h3>
    <p>{rob.texts}</p>
    
    
 
  </Card>
          </>
      
        } )}
    </div>
      
   
    </>
  )
}

export default About