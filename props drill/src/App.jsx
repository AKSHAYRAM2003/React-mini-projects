import React, { useState } from "react";
import Card from "./Card";
function App() {
  const data = [
    {
      name: "john",
      proffession: "painter",
      image:
        "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        freinds:false
    },
    {
      name: "rahul",
      proffession: "singer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        freinds:false
    },
    {
      name: "amith",
      proffession: "artist",
      image:
        "https://images.unsplash.com/photo-1712456298333-5747a9506a5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        freinds:false
    },
    {
      name: "shamith",
      proffession: "programmer",
      image:
        "https://images.unsplash.com/photo-1684477374022-120b1dd2ec6c?q=80&w=1764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        freinds:false
    },
  ];
   
   const [ realdata , setRealData]=useState (data);
   const handleFreindButton = (cardindex)=>{
    setRealData((previous)=>{
      return previous.map((item , index)=>{
        if(index === cardindex){
          return{...item, freinds:!item.freinds}
        }
        return item;
      })
    })
   }


  return (
    <>

      <div className="w-full  h-screen bg-zinc-100 flex gap-4 items-center justify-center ">
       {data.map((item,index)=>(
        <Card key={index} index = {index} handleClick = {handleFreindButton} values={item}/>
       ))}
      </div>

    </>
  );
}

export default App;
