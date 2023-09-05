import Card from './components/card';
import React,{useState} from 'react';
import './App.css';
import Carddata from './components/API/cardapi';
import Navbar from './components/Navbar';
import Todo from './TodoProject/todo.js';



const App=()=> {
//   const uniquelist=[...new Set(Carddata.map((curElem)=>{
//     return curElem.catagory;
//   })),
// "ALL",];
//        const[CardData,setCardData]=useState(Carddata);
//        const[menulist,setmenulist]=useState(uniquelist);

//       console.log(uniquelist);
//        const filtercontent=(catagory)=>{
//         if(catagory==="ALL"){
//           setCardData(Carddata);
//           return;
//         }
//         const updatedList=Carddata.filter((curElem)=>{
//           return curElem.catagory===catagory;
//         });
//         setCardData(updatedList);

//        };
//        const filtercontent0=(catagory0)=>{ 
//         const updatedList=Carddata.filter((curElem)=>{
//           return curElem.catagory0===catagory0;
//         });
//         setCardData(updatedList);

//        };

  
  return (
    <div className="App">
    {/* <Navbar filtercontent={filtercontent} filtercontent0={filtercontent0} menulist={menulist}/>

      <div className="Appcard">
      <Card CardData={CardData}/>
      </div> */}
      <Todo/>
      
      
    </div>
  );
}

export default App;
