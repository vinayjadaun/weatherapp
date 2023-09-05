import React from 'react';
 const Navbar=({filtercontent,filtercontent0,menulist})=>{
    return(
      
        <>
           <div className="navbar">
     
     <div className="buttongrp">
     {
            menulist.map((curelem)=>{
                return (
                    
                      <button className="btn" onClick={()=>filtercontent(curelem)}>{curelem}</button>
                   
                );
            })
        }
       {/* <button className="btn" onClick={()=>filtercontent0("all")}>ALL</button> */}
     
   
       </div>
     </div>
        </>
    )
 }
 export default Navbar;