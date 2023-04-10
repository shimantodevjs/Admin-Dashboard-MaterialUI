import "./WidgetSmall.css"
import React, { useState, useEffect } from "react";
import { Visibility } from "@mui/icons-material"

export default function WidgetSmall() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=5");
    const jsonData = await response.json();
    setData(jsonData.results);
  };


  return (
    <div className='widgetSmall'>
        <h3 className="widgetSmallTitle">New joined members</h3>
            
            {data.map((item) => (
                <div className="widgetSmallList" key={item.login.uuid}>

               <div className="widgetSmallPerson">
                    
               <img src={item.picture.medium} alt="" className="widgetSmallImg" />

               <div className="widgetSmallIdentity">
               <div className="widgetSmallName" >{item.name.first} {item.name.last}
               </div>

               <div className="widgetSmallLocation" >
                {item.location.country}
               </div>
               </div>
               </div>   

               <button className="widgetSmallButton">
                    <Visibility className="widgetSmallIcon" />
                    Display
               </button>


             </div>
            ))}
            
     
    </div>
  )
}
