import React from 'react';
import './card.css';
function Card({ CardData}){
    console.log(CardData)
   
    return(
        <>
        {CardData.map((curElem)=>{
             const {Id,cardname,carddetail,cardimg}=curElem;
        return(
            <>
             <h1 className="card-container" key={Id}>
            <h1 className="card-id">{Id}</h1>
            <h2 className="card-topic">{cardname}</h2>
            <h1 className="card-detail">
{carddetail}</h1>
            <h1 className="card-read-more">Read more...</h1>
            <img src={cardimg} className="card-img"/>
        </h1>
        
            </>
        )
})}
       
        </>

    );
}

export default Card;