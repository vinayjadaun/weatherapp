import React,{useState,useEffect} from 'react';
import './mausam.css';

function Mausam(){
    const[searchvalue,setsearchvalue]=useState("delhi");
    const[temp,settemp]=useState({});
    const[wheathericon,setwheathericon]=useState("");
    const getwheatherinfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=a8ac5af290eeab2fb5e05478728f56a1`;
            const res=await fetch(url);
            const Data=await res.json();
            console.log(Data);
            const {temp}=Data.main;
            console.log(temp);
            const {speed}=Data.wind;
            console.log(speed);
            const {main:wheathermood}=Data.weather[0];
            console.log(wheathermood);
            const {pressure,humidity}=Data.main;
            console.log(pressure);
            console.log(humidity);
            const {name}=Data;
            console.log(name);
            const {country,sunset}=Data.sys;
            let sec=sunset;
            console.log(sec);
            let date=new Date(sec*1000);
            console.log(date);
            let viewhour=`${date.getHours()}`;
            let viewmin=`${date.getMinutes()}`;
           
            
            console.log(country);
            console.log(sunset);
            const tempinfo={
                temp,
                speed,
                wheathermood,
                pressure,
                sunset,
                humidity,
                name,
                country,
                
                viewhour,
                viewmin
               
              
                
            }
            settemp(tempinfo);

     
           


        }
        catch(e){
            console.log(e);
        }

    };
  
    useEffect(()=>{getwheatherinfo()},[]);
    useEffect(()=>{
        if(temp.wheathermood){
            switch(temp.wheathermood){
                case "Clouds":
                    setwheathericon("fa-solid fa-cloud");
                    break;
                case "Haze":
                    setwheathericon("fa-solid fa-smog");
                    break;
                case "Clear":
                    setwheathericon("fa-regular fa-sun");
                    break;
                case "Rain":
                    setwheathericon("fa-solid fa-cloud-showers-water");
                    break;
                case "Mist":
                    setwheathericon("fa-solid fa-cloud-rain");
                    break;

                default:
                    setwheathericon("fa-regular fa-sun");
                    break;
                    

            }
        }
    },[temp.wheathermood])
    
    return(
        <>
        
        <div className="mainContainer">
        <div className="copyright">DEV@<span>Vinay_J</span></div>
           <div className="searchContainer">
            <input type="search" className="inputSearch" placeholder="Search By City Name" value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)}/>
            <button className="search" onClick={getwheatherinfo} >SEARCH</button>


           </div>
           <div className="displayDataContainer">
            <div className="icon-container">
           <i class={`${wheathericon}`}></i></div>
            <div className="displaybox-1">
                <div className="a1">
                    {temp.temp}c

                </div>
               <div className="a2">
                <div className="b1">{temp.wheathermood}</div>
                <div className="b2">{temp.name},{temp.country}</div>

               </div>

            </div>
            <div className="displaybox-2">
                <span>
                {new Date().toLocaleString()}</span>
              
               
            </div>
            <div className="displaybox-3">
            <i class="fa-solid fa-moon"></i>
                <div>
               {temp.viewhour} : {temp.viewmin} {temp.viewhour>12 ? "PM" : "AM"}<br/>12/01/25
                </div>
                <i class="fa-solid fa-droplet"></i>
                <div>
                   {temp.humidity}<br/> humidity
                </div>
                <i class="fa-solid fa-cloud-showers-heavy"></i>
                <div>
                    {temp.pressure}<br/>1040HM
                    
                </div>
                <i class="fa-solid fa-wind"></i>
                <div>
                    {temp.speed}<br/>12.24
                    
               </div>
               </div>
            
 
               </div>
        </div>
        </>

    );
  
}
export default Mausam;
