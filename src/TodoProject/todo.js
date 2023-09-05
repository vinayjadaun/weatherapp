import React,{useState,useEffect} from 'react';
import './todo.css';

const getLocalStorage=()=>{
    const list=localStorage.getItem("mytodolist");
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}
const Todo=()=>{
    const[inputdata,setinputdata]=useState("");
    const[items,setitems]=useState(getLocalStorage());
    const[isedititem,setisedititem]=useState("");
    const[togglebutton,settogglebutton]=useState(false);
    const additems=()=>{
        if(!inputdata){
            alert('please fill the field');
        }else if(inputdata && togglebutton){
            setitems(
                items.map((curele)=>{
                    if(curele.id===isedititem){
                        return {...curele,name:inputdata};
                    }
                    return curele;
                })
            )
            setinputdata("");
            setisedititem("");
            settogglebutton(false);
            

        }
        else{
            const myinputdata={
                id:new Date().getTime().toString(),
                name:inputdata,

            }
            
        setitems([...items,myinputdata]);
        setinputdata("");
        setinputdata("");
        setisedititem("");
        settogglebutton(false);
        }
    }

     
    const deleteitem=(index)=>{
        const updatedItem=items.filter((curelem)=>{
            return curelem.id!==index;
        })
        setitems(updatedItem);
       
    
};
   const edititem=(index)=>{
    const todo_edit_item=items.find((curele)=>{
        return curele.id===index;

    })
    setinputdata(todo_edit_item.name);
    setisedititem(index);
    settogglebutton(true);

   }

     useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
    
},[items]);

    return( 
   <>
   
   <div className="body">
    
    <div className="Logo">
        <div className="credit-container">
    <div className="credit">This REACT App is created by Vinay_j</div></div>
       <div className="logoimg-container"> <img src="https://i.pinimg.com/1200x/c4/b1/9a/c4b19aa223b8cd6ac915269cfd749d8b.jpg" alt="notes.png" className="logoimg"/></div>
        <div className="logotext">Add Your List Here ✌</div>
        <div className="add-items">

    
        < input type="text" className="input" placeholder="✍ Add Items" value={inputdata} onChange={(event)=>{
           setinputdata( event.target.value);
        }}/>
        {togglebutton? 
         <i class="fa-solid fa-pen-to-square" onClick={additems}></i>  :
         <i class="fa-solid fa-plus" onClick={additems}></i> }
      
       
        </div>
            
    
       
            
                {
                    items.map((curele)=>{
                        return(
                            <>
                             <div className="items" key={curele.id}>
                            <div className="item-box">
                            {curele.name}

                            </div>
                            <i class="fa-solid fa-pen-to-square" onClick={()=>edititem(curele.id)}></i>
                            <i class="fa-regular fa-trash-can" onClick={()=>deleteitem(curele.id)}></i>
                            </div>
                            </>

                        );
                    })
                }
              
               

          <div className="clearContainer">
         
              <div className="clear" onClick={()=>{
                setitems([]);
              }}>
        REMOVE ALL
    </div> 
    </div>
       
    </div>
    
    
   </div>
   </>

    );
}
export default Todo;